import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import newRequest from "../utils/newRequest";
import "../styles/Success.css";

const Success = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(search);
  const payment_intent = params.get("payment_intent");

  useEffect(() => {
    const makeRequest = async () => {
      try {
        await newRequest.put("/orders", { payment_intent });
        setTimeout(() => {
          navigate("/orders");
        }, 5000);
      } catch (err) {
        console.log(err);
      }
    };

    makeRequest();
  }, [payment_intent, navigate]);

  return (
    <div className="success-container">
      <div className="success-icon">✅</div>
      <div className="success-message">Payment successful!</div>
      <div className="success-redirect">
        You are being redirected to the orders page.<br />
        Please do not close the page.
      </div>
    </div>
  );
};

export default Success;