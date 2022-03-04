import React,{ createContext,useState } from "react"; 
export const CartContext = React.createContext();

const CartContextProvider = (props) => {
    const sepet = [];
  let tutar=0;
  return <CartContext.Provider value={sepet}>
  {props.children}
</CartContext.Provider>
};

export default CartContextProvider;
