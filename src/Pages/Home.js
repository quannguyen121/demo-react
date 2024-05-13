import React from "react";
import { Link, Outlet } from "react-router-dom";
import hhhhh from "../assets/5819253973.jpg"; // Import hình ảnh nền từ assets folder
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${hhhhh})` }}>
      <div className="headerContainer">
        <h1> Food Việt Nam </h1>
        <p> siêu ngon </p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div> 
      <Outlet/>
    </div>
  );
}

export default Home;
