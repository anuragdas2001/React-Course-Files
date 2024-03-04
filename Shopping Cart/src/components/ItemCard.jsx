import React from "react";
import styles from "../styles/ItemCard.module.css";
import { useValue } from "../Itemcontext";

function ItemCard({id,name, price }) {
  // const ItemValue = useContext(ItemContext);
  // console.log("total", value.total);
  // console.log("item", value.item);
  const { item, setItem } = useValue();
  const { total, setTotal } = useValue();
  const {handleAdd,handleRemove} =useValue();
  // const handleAdd = () => {
  //   setTotal(total + price);
  //   setItem(item + 1);
  // };

  // const handleRemove = () => {
  //   if (total > 0 && item > 0) {
  //     setTotal(total - price);
  //     setItem(item - 1);
  //   }
  // };

  return (
    <div className={styles.itemCard}>
      <div className={styles.itemName}>{name}</div>
      <div className={styles.itemPrice}>&#x20B9; {price}</div>
      <div className={styles.itemButtonsWrapper}>
        <button className={styles.itemButton} onClick={() => handleAdd({id,name,price})}>
          Add
        </button>
        <button className={styles.itemButton} onClick={() => handleRemove({id,name,price})}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
