import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ product, type }) => {
  const navigate = useNavigate();

  if (!product) return null;

  const handleClick = () => {
    // აქ გადავდივართ კონკრეტული ტიპისა და id-ით
    navigate(`/${type}/${product.id}`);
  };

  return (
    <div className="product-item">
      <img src={product.img} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Prise: <span>{product.price}</span></p>
      <button onClick={handleClick}>Details</button>
    </div>
  );
};

export default Card;
