import React from 'react';
import { useParams } from 'react-router-dom';
import { useData } from '../../context/DataContext';
import { useCart } from '../../context/CartContext'; // 🛒 კალათის კონტექსტი

const ProductDetails = () => {
  const { type, id } = useParams();
  const { data } = useData();
  const { addToCart } = useCart();

 
  const product = data[type]?.find(item => item.id === Number(id));


  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  const handleAddToCart = () => {
    addToCart({ ...product, price: product.price });
  };

  return (
    <div className="product-details">
      <img src={product.img} alt={product.name} />
      <h1>{product.name}</h1>
      <p>{product.description}</p>

 
      <h2>Price: ${product.price}</h2>

      <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
