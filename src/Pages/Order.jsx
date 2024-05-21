import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bunbo from "../assets/búnbò.jpg";
import comtam from "../assets/cơmtấm.jpg";
import pho from "../assets/phở.jpg";
import bundau from "../assets/búnđậu.jpg";
import banhmi from "../assets/bánhmì.jpg";
import banhcuon from "../assets/bánhcuốn.jpg";
import './Order.css';

const Order = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const menuItems = [
    {
      id: 1,
      name: "Bún bò",
      image: bunbo,
      price: 2.0,
    },
    {
      id: 2,
      name: "Cơm tấm",
      image: comtam,
      price: 1.5,
    },
    { 
      id: 3,
      name: "Phở",
      image: pho,
      price: 2.1,
    },
    {
      id: 4,
      name: "Bún đậu",
      image: bundau,
      price: 2.5,
    },
    {
      id: 5,
      name: "Bánh mì",
      image: banhmi,
      price: 1,
    },
    {
      id: 6,
      name: "Bánh cuốn",
      image: banhcuon,
      price: 1.2,
    },
  ];

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="order-page">
      <h1>Order Food VN</h1>
      <div className="menu-items">
        {menuItems.map((item) => (
          <div key={item.id} className="menu-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Price: ${item.price.toFixed(2)}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <div className="cart">
        <h2>Your Cart</h2>
        <div className="cart-items-scroll">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>Price: ${item.price.toFixed(2)}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
        </div>
        <div className="total-price">Total: ${calculateTotal().toFixed(2)}</div>
        <button className="cart__checkout" onClick={handleCheckout}>Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Order;
