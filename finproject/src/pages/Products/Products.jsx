import React, { useState, useEffect } from 'react';
import { useData } from '../../context/DataContext';
import Card from '../../components/Card/Card';

const Products = () => {
  const [type, setType] = useState('pizzas');
  const { data, error, isLoading } = useData();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);


  const totalItems = Array.isArray(data[type]) ? data[type].length : 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);


  useEffect(() => {
    const calculateItemsPerPage = () => {
      const containerWidth = window.innerWidth; 
      const cardWidth = 260; 
      const itemsPerRow = Math.floor(containerWidth / cardWidth);
      const rows = 2;
      setItemsPerPage(itemsPerRow * rows);
    };

    calculateItemsPerPage();
    window.addEventListener('resize', calculateItemsPerPage); // ფანჯრის ზომის ცვლილებაზე რეაგირება

    return () => window.removeEventListener('resize', calculateItemsPerPage);
  }, []);

  if (error) return <div>Error: {error}</div>;


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = Array.isArray(data[type]) ? data[type].slice(indexOfFirstItem, indexOfLastItem) : [];

 
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="products-container">
      <div className="product-filter">
        <button className={type === 'pizzas' ? 'active' : ''} onClick={() => { setType('pizzas'); setCurrentPage(1); }}>Pizzas</button>
        <button className={type === 'desserts' ? 'active' : ''} onClick={() => { setType('desserts'); setCurrentPage(1); }}>Desserts</button>
      </div>

      <h1>{type === 'pizzas' ? 'Pizza Products' : 'Dessert Products'}</h1>

      {isLoading ? <p>Loading...</p> : (
        <div className="product-list">
          {currentItems.map((product) => (
            <Card key={product.name} product={product} type={type} />
          ))}
        </div>
      )}

      {/* Pagination Control */}
      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={nextPage} disabled={currentPage >= totalPages}>Next</button>
      </div>
    </div>
  );
};

export default Products;
