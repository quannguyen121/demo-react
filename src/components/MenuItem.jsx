// MenuItem.js
import React from "react";
import { useNavigate } from "react-router-dom";

const MenuItem = ({ image, name, price }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Order");
  };

  return (
    <div className="menuItem" onClick={handleClick}>
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1>{name}</h1>
      <p>${price}</p>
    </div>
  );
};

export default MenuItem;
