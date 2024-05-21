import React from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';
import "../styles/Checkout.css";

const Checkout = () => {
  const navigate = useNavigate();

  const handleOrder = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'YOUR_SERVICE_ID', 
      'YOUR_TEMPLATE_ID', 
      e.target, 
      'YOUR_USER_ID'
    ).then((result) => {
      console.log(result.text);
      alert('Order placed and email sent successfully!');
      navigate('/confirmation');
    }, (error) => {
      console.log(error.text);
      alert('Failed to send email. Please try again later.');
    });
  };

  return (
    <div className="checkout">
      <h1 className="checkout__title">Checkout</h1>
      <form className="checkout__form" onSubmit={handleOrder}>
        <label>
          Name:
          <input type="text" name="name" placeholder="Enter your name" required />
        </label>
        <label>
          Address:
          <input type="text" name="address" placeholder="Enter your address" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" placeholder="Enter your email" required />
        </label>
        <label>
          Payment Method:
          <select name="payment_method" required>
            <option value="credit-card">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="cash">Cash on Delivery</option>
          </select>
        </label>
        <button className="checkout__button" type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
