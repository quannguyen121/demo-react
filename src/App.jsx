import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Order from "./Pages/Order";
import CartPage from "./Pages/CartPage";
import MenuItemDetail from "./Pages/MenuItemDetail";
import Checkout from "./Pages/Checkout";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar cart={cart} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/:id" element={<MenuItemDetail />} />
          <Route
            path="/order"
            element={
              <Order cart={cart} setCart={setCart} setTotal={setTotal} />
            }
          />
          <Route
            path="/cart"
            element={<CartPage cart={cart} total={total} />}
          />
          <Route
            path="/checkout"
            element={<Checkout cart={cart} total={total} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
