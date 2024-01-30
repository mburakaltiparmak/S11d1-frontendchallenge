import { createContext, useContext, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
export const CartContext = createContext();
export const useCart = () => useContext(CartContext);
const CartContextProvider = (props) => {
  const [cart, setCart] = useLocalStorage('s11g1',[]);
  const addItem = (item) => {
    setCart([...cart, item]);
  };
  const removeItem = (silinecekItem) => {
    const guncelCart = cart.filter((item) => item.id !== silinecekItem);
    setCart(guncelCart);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem }}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
