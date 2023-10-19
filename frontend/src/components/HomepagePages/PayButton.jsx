import axios from "axios";
import { useSelector } from "react-redux";
import { url } from "../../app/api/apiStripe";
import React from 'react';

const PayButton = ({ reservedCar, onReserveClick }) => {
  const customer = useSelector((state) => state.auth);

  const handleCheckoutAndReserve = () => {
    axios.post(`${url}/stripe/create-checkout-session`, {
      reservedCar,
      customerId: customer._id
    }).then((res) => {
      if (res.data.url) {
        window.location.href = res.data.url;
      }
    }).catch((err) => console.log(err.message));

    if (onReserveClick) {
      onReserveClick(); // Wywołaj funkcję zapisu rezerwacji, jeśli jest dostępna
    }
  }

  return (
    <button className="btn btn-primary" onClick={handleCheckoutAndReserve}>Przejdź do płatności i Zarezerwuj</button>
  );
}

export default PayButton;
