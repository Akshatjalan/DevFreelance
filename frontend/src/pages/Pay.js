import React, { useEffect, useState } from "react";
import "../styles/Pay.css";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import newRequest from "../utils/newRequest";
import { useParams } from "react-router-dom";
import CheckoutForm from "../components/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51J201hSHFIyVtnqxN74XMUe3JQIK1I9DD4DnLVPlWV3yiDoGSI6kVIZlW33T5QEFtPR0yL9hQVcp5WEU0dhSjzZa00NivWOi4j"
);

const Pay = () => {
  const [clientSecret, setClientSecret] = useState("");

  const { id } = useParams();

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await newRequest.post(
          `/orders/create-payment-intent/${id}`
        );
        setClientSecret(res.data.clientSecret);
      } catch (err) {
        console.log(err);
      }
    };
    makeRequest();
  }, [id]);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return <div className="pay">
    {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
  </div>;
};

export default Pay;