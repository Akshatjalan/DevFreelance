import { useEffect, useRef } from "react";

const AUTO_LOGOUT_TIME = 30 * 60 * 1000; // 30 minutes

export default function useAutoLogout() {
  const timer = useRef();

  useEffect(() => {
    const logout = () => {
      localStorage.removeItem("currentUser");
      localStorage.removeItem("accessToken");
      window.location.reload();
    };

    const resetTimer = () => {
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(logout, AUTO_LOGOUT_TIME);
    };

    // Events that indicate user activity
    const events = ["mousemove", "keydown", "mousedown", "touchstart"];
    events.forEach((event) => window.addEventListener(event, resetTimer));

    resetTimer();

    return () => {
      events.forEach((event) => window.removeEventListener(event, resetTimer));
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);
}
