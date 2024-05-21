import React from "react";
import { useNavigate } from "react-router-dom";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";

function Menu() {
  const navigate = useNavigate();

  const handleItemClick = (name) => {
    navigate(`/order?name=${name}`);
  };
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
              onClick={() => handleItemClick(menuItem.name)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;