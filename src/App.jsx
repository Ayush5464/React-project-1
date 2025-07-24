import React from "react";
import Cart from "./cart/Cart";
import Product from "../product/Product";
import Home from "../home/Home";
import Navbar from "../navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Product />
      {/* <Cart /> */}
    </div>
  );
}

export default App;
