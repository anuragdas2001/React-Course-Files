import { createContext, useState, useContext } from "react";
import CartModal from "./components/CartModal";
export const ItemContext = createContext();
export function useValue() {
  const value = useContext(ItemContext);
  return value;
}
function CustomItemContext({ children }) {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const handleAdd = (prod) => {
    const { id, name, price } = prod;
    const index = cartItems.findIndex((item) => item.id === id);
    if (index === -1) {
      setCartItems([...cartItems, { ...prod, qty: 1 }]);
      setTotal(total + price);
    } else {
      cartItems[index].qty++;
      console.log(cartItems);
      setCartItems(cartItems);
      setTotal(total + cartItems[index].price);
    }
    setItem(item + 1);
  };

  const handleRemove = (prod) => {
    const { id, name, price } = prod;
    const index = cartItems.findIndex((item) => item.id === id);

    if (index !== -1) {
      cartItems[index].qty--;
      setItem(item - 1);
      setTotal(total - cartItems[index].price);
      if (cartItems[index].qty == 0) {
        cartItems.splice(index, 1);
      }
    }
    setCartItems(cartItems);
  };

  const handleCart = () => {
    setShowCart(!showCart);
  };

  const handleReset = () => {
    setTotal(0);
    setItem(0);
  };
  const handleClear = () => {
    setCartItems([]);
  };
  const handleClose = () => {
    setShowCart(!showCart);
  };
  return (
    <ItemContext.Provider
      value={{
        total,
        item,
        handleAdd,
        handleRemove,
        handleClear,
        handleCart,
        handleClose,
        cartItems,
        handleClear,
        handleReset,
      }}
    >
      {showCart ? <CartModal /> : null}
      {children}
    </ItemContext.Provider>
  );
}

export default CustomItemContext;
