import "./App.css";
import { useEffect, useState } from "react";
import Items from "./components/Items";
import Navbar from "./components/Navbar";
import CartModal from "./components/CartModal";
import { ItemContext } from "./Itemcontext";
import { TotalContext } from "./TotalContext";
import CustomItemContext from "./Itemcontext";
function App() {
 

  return (
    <CustomItemContext>

      <div className="App">
        <h2>Shopping Cart</h2>
        <Navbar />
        <Items />
      </div>
    </CustomItemContext>
  );
}
export default App;
