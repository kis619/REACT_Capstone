import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((item) => item !== productToRemove);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, productToClear) => {
  return cartItems.filter((item) => item !== productToClear);
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemfromCart: () => {},
  clearItemfromCart: () => {},
  cartCount: 0,
  priceTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState();
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [priceTotal, setPriceTotal] = useState(0);

  useEffect(() => {
    const newCount = cartItems.reduce((total, cartItem) => {
      return total + cartItem.quantity;
    }, 0);
    setCartCount(newCount);
  }, [cartItems]);
  
  useEffect(() => {
    const newPrice = cartItems.reduce((total, cartItem) => {
      return total + cartItem.quantity * cartItem.price;
    }, 0);
    setPriceTotal(newPrice);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const removeItemfromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };
  const clearItemfromCart = (productToClear) => {
    setCartItems(clearCartItem(cartItems, productToClear));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemfromCart,
    clearItemfromCart,
    cartItems,
    cartCount,
    priceTotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
