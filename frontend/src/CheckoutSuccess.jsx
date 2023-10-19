import { Link } from "react-router-dom";

const CheckoutSuccess = () => {

    return (
      <div className="checkout-success">
        <h2>Checkout</h2>
        <p>Checkout Success!</p>
        <Link to="/">Wróć na stronę główną</Link>
      </div>
    );
  };
  
  export default CheckoutSuccess;