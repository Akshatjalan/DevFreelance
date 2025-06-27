import React from "react";
import { Link } from "react-router-dom";
import "../styles/Messages.css";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import newRequest from "../utils/newRequest";
import moment from "moment";

const Messages = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["conversations"],
    queryFn: () =>
      newRequest.get(`/conversations`).then((res) => {
        return res.data;
      }),
  });

  const mutation = useMutation({
    mutationFn: (id) => {
      return newRequest.put(`/conversations/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["conversations"]);
    },
  });

  const handleRead = (id) => {
    mutation.mutate(id);
  };

  return (
    <div className="messages">
      {isLoading ? (
        <div className="loadingPlaceholder">
          <div className="spinner"></div>
          <div>Loading messages...</div>
        </div>
      ) : error ? (
        <div className="loadingPlaceholder">
          <div className="errorMessage">
            Sorry, something went wrong while loading your messages.
          </div>
        </div>
      ) : (
        <div className="messagesContainer">
          <div className="messagesTitle">
            <h1>Messages</h1>
          </div>
          {data.length === 0 ? (
            <div className="noMessages">
              You don’t have any messages yet.
              <br />
              Start a conversation from the{" "}
              <Link to="/orders" className="link">
                Orders
              </Link>{" "}
              page.
            </div>
          ) : (
            <table>
              <tr>
                <th>{currentUser.isSeller ? "Buyer" : "Seller"}</th>
                <th>Last Message</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
              {data.map((c) => (
                <tr
                  className={
                    ((currentUser.isSeller && !c.readBySeller) ||
                      (!currentUser.isSeller && !c.readByBuyer)) &&
                    "active"
                  }
                  key={c.id}
                >
                  <td>{currentUser.isSeller ? c.buyerId : c.sellerId}</td>
                  <td>
                    <Link to={`/message/${c.id}`} className="messagelink">
                      {c?.lastMessage?.substring(0, 100)}...
                    </Link>
                  </td>
                  <td>{moment(c.updatedAt).fromNow()}</td>
                  <td>
                    {(currentUser.isSeller && !c.readBySeller) ||
                    (!currentUser.isSeller && !c.readByBuyer) ? (
                      <button
                        className="markButton"
                        onClick={() => handleRead(c.id)}
                      >
                        Mark as Read
                      </button>
                    ) : (
                      <button className="markButton">
                        <Link to={`/message/${c.id}`}>Open</Link>
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </table>
          )}
        </div>
      )}
    </div>
  );
};

export default Messages;
