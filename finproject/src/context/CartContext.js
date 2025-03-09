import React, { createContext, useContext, useState, useEffect } from 'react';


const CartContext = createContext();


export const useCart = () => useContext(CartContext);


export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);


  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

 
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ✅ პროდუქტის დამატება კალათაში (თუ უკვე არის, რაოდენობა იზრდება)
  const addToCart = (product) => {
    setCart((prevCart) => {
        const existingItemIndex = prevCart.findIndex(
            (item) => item.name === product.name && item.selectedSize === product.selectedSize
        );

        if (existingItemIndex !== -1) {
            return prevCart.map((item, index) => 
                index === existingItemIndex 
                ? { ...item, quantity: item.quantity + 1 } 
                : item
            );
        } else {
            return [...prevCart, { ...product, quantity: 1 }];
        }
    });
  };


// პროდუქტის წაშლა კალათიდან (სახელის და ზომის მიხედვით)
const removeFromCart = (productName, size) => {
  setCart((prevCart) => {
    return prevCart
      .map((item) => {
        if (item.name === productName && item.selectedSize === size) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
      .filter((item) => item.quantity > 0);
  });
};

  // ✅ კონტექსტის მნიშვნელობის დაბრუნება
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
