import React from "react";
import styles from "../styles/Navbar.module.css";
import { useValue } from "../Itemcontext";
function Navbar() {
  const { item, setItem } = useValue();
  const { total, setTotal } = useValue();
  const { handleClear } = useValue();
  const {handleCart,handleReset} = useValue();
  // console.log(item, total);
  // console.log(handleClear);

  // const value = useContext(context);
  // console.log(value)
  // console.log("total", value.total);
  // console.log("item", value.item);
  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {total}</h1>
      <h1>Items: {item}</h1>
      <button onClick={()=>handleCart()}>Cart</button>
      <button onClick={() => handleReset()}>Clear</button>
    </div>
  );
}

export default Navbar;
