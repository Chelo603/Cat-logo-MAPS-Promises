import "./App.scss";
import React from "react";
import Home from "../src/Components/Home";
import { CartProvider } from "./context/CartContext";

const App = () => {
 
  return (
    <CartProvider>
      <Home />
    </CartProvider>
  );
};

export default App;