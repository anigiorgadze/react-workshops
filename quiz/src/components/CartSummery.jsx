import React from 'react'

const CartSummery = ({ cart,handleRemoveFromCart  }) => {

    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const roundedTotalPrice = Math.round(totalPrice * 100) / 100;
    return (
        <div className="cart-summary">
            <h3>Cart ({cart.length} items)</h3>
            {cart.length > 0 ? (
                <ul>
                    {cart.map((item, index) => (
                        <li key={index}>
                            {item.title} - ${item.price} x {item.quantity} =  {Math.round(item.price * item.quantity * 100) / 100}
                            <button className='x-btn' onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Your cart is empty.</p>
            )}
             <h4>Total: ${roundedTotalPrice}</h4>
        </div>
    )
}

export default CartSummery
