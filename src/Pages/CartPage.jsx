import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../styles/Cart.css";

const Cart = ({ cart, removeFromCart }) => {
  const navigate = useNavigate();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleRemoveFromCart = (id) => {
    removeFromCart(id);
  };

  const handlePlaceOrder = () => {
    alert('Order placed!');
    // Điều hướng tới trang xác nhận đơn hàng hoặc trang chủ
    navigate('/confirmation');
  };

  return (
    <div className="cart">
      <h2 className="cart__title">Your Cart</h2>
      <div className="cart__items-scroll">
        {cart.length > 0 ? (
          cart.map((item) => (
            <div key={item.id} className="cart__item">
              <img src={item.image} alt={item.name} />
              <div className="cart__item-info">
                <h3 className="cart__item-name">{item.name}</h3>
                <p className="cart__item-price">${item.price.toFixed(2)}</p>
              </div>
              <button className="cart__item-remove" onClick={() => handleRemoveFromCart(item.id)}>
                Remove
              </button>
            </div>
          ))
        ) : (
          <p className="cart__empty">Your cart is empty</p>
        )}
      </div>
      {cart.length > 0 && (
        <>
          <p className="cart__total">Total: ${totalPrice.toFixed(2)}</p>
          <div className="cart__buttons">
            <Link to="/checkout">
              <button className="cart__checkout">Proceed to Checkout</button>
            </Link>
            <button className="cart__order" onClick={handlePlaceOrder}>
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
