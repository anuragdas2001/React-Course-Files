import React from "react";
// import { useValue } from "./itemContext";
import styles from "../styles/CartModal.module.css";
import { useValue } from "../Itemcontext";
function CartModal() {
  const { handleClose, handleClear } = useValue();
  const { cartItems } = useValue();
  let totalprice = 0;

  return (
    <div className={styles.cartModal}>
      <div
        className={styles.closeButton}
        onClick={() => {
          handleClose();
        }}
      >
        Close
      </div>
      <div
        className={styles.clearButton}
        onClick={() => {
          handleClear();
        }}
      >
        Clear
      </div>
      <div className={styles.itemContainer}>
        <ul>
          {cartItems.map((item) => {
            totalprice += item.qty * item.price;
            return (
              <div className={styles.cartCard} key={item.id}>
                <h1>{item.name}</h1>
                <h3>X {item.qty}</h3>
                <h3>X{item.qty * item.price}</h3>
              </div>
            );
          })}
        </ul>
      </div>
      <div className={styles.total}>
        <div className={styles.totalText}>Total</div>
        <div className={styles.totalPrice}>${totalprice}</div>
      </div>
    </div>
  );
}

export default CartModal;
