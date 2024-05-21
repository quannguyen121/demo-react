import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { MenuList } from "../helpers/MenuList";


function MenuItemDetail() {
  const { id } = useParams();
  const menuItem = MenuList[id];


  const [quantity, setQuantity] = useState(1);


  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    setQuantity(newQuantity);
  };

  const handleOrder = () => {

    alert(`Đã đặt ${quantity} ${menuItem.name} thành công!`);
  };

  return (
    <div className="menuItemDetail">
      <h1>{menuItem.name}</h1>
      <img src={menuItem.image} alt={menuItem.name} />
      <p>Price: ${menuItem.price.toFixed(2)}</p>
      <div>
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          min="1"
          value={quantity}
          onChange={handleQuantityChange}
        />
      </div>
      <button onClick={handleOrder}>Order</button>
    </div>
  );
}

export default MenuItemDetail;
