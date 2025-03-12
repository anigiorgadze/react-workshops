import React from 'react';
import { useCart } from '../../context/CartContext';

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cart.length === 0 ? <p>Your cart is empty</p> : (
        <div className="cart-items">
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.img} alt={item.name} />
              <div className="cart-item-info">
                <h3>{item.name} {item.selectedSize ? `(${item.selectedSize})` : ""}</h3>
                <p><strong>Price:</strong> ${item.price}</p>
                <p><strong>Quantity:</strong> {item.quantity}</p>
              </div>
              <button 
                className="remove-btn" 
                onClick={() => removeFromCart(item.name, item.selectedSize)} // ✅ გამოსწორებული!
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
