import React from "react";
import { useParams } from "react-router-dom";
import "../styles/Message.css";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import newRequest from "../utils/newRequest";

const Message = () => {
  const { id } = useParams();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["messages"],
    queryFn: () =>
      newRequest.get(`/messages/${id}`).then((res) => {
        return res.data;
      }),
  });

  const mutation = useMutation({
    mutationFn: (message) => {
      return newRequest.post(`/messages`, message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["messages"]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({
      conversationId: id,
      desc: e.target[0].value,
    });
    e.target[0].value = "";
  };

  return (
    <div className="message">
      <div className="messageContainer">
        {/* <span className="breadcrumbs">
          Messages {">"} Akshat Jalan {">"}
        </span> */}
        {isLoading ? (
          "loading"
        ) : error ? (
          "error"
        ) : (
          <div className="chat">
            {data.map((m) => (
              <div
                className={m.userId === currentUser._id ? "owner item" : "item"}
                key={m._id}
              >
                <img
                  src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        )}
        <hr />
        <form className="write" onSubmit={handleSubmit}>
          <textarea type="text" placeholder="Write a message" />
          <button type="submit" className="Buttons">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Message;
