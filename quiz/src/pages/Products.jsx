import React, { useState } from 'react'
import Card from '../components/Card'
import useCustomHooks from '../hooks/useCustomHooks'
import CartSummery from '../components/CartSummery'


const Products = () => {
    const [skip, setSkip] = useState(0)
    const [data, error, isLoading] = useCustomHooks(`https://dummyjson.com/products`, skip)
    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) => {
        setCart((prevCart) => {
            const updatedCart = [...prevCart];
            const existingProductIndex = updatedCart.findIndex(item => item.id === product.id);
            console.log(cart)
            if (existingProductIndex >= 0) {
                // თუ პროდუქტი უკვე არის კალათაში, გაზარდე რაოდენობა
                updatedCart[existingProductIndex].quantity += 1;
            } else {
                // თუ პროდუქტი არ არის კალათაში, დაამატე როგორც ახალი პროდუქტი
                updatedCart.push({ ...product, quantity: 1 });
            }

            return updatedCart;
        });
    };

    const handleRemoveFromCart = (productId) => {
        setCart((prevCart) => {
            const updatedCart = [...prevCart];
            const productIndex = updatedCart.findIndex(item => item.id === productId);
    
            if (productIndex >= 0) {
                if (updatedCart[productIndex].quantity > 1) {
                    // თუ რაოდენობა მეტია 1-ზე, ჩამოაჭერი ერთი.
                    updatedCart[productIndex].quantity -= 1;
                } else {
                    // თუ რაოდენობა 1-ია, ამოიშალოს პროდუქტი
                    updatedCart.splice(productIndex, 1);
                }
            }
    
            return updatedCart;
        });
    };


    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className='main-div'>
            {isLoading && <p>Loading...</p>}

            <div className='card-container'>
                {data.map((product) => (
                    <Card key={product.id} props={product} handleAddToCart={handleAddToCart} />

                ))}
            </div>

            <div className='page-div'>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num, index) => (
                    <button className='page-btn' key={index} onClick={() => setSkip(index * 10)}>
                        {num}
                    </button>
                ))}
            </div>

            <CartSummery cart={Object.values(cart)} handleRemoveFromCart={handleRemoveFromCart}/>
        </div>
    );
}

export default Products
