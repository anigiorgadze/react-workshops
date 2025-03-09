import React, { createContext, useContext, useState, useEffect } from 'react';

// Step 1: Context-ის შექმნა
const DataContext = createContext();

export const useData = () => {
  return useContext(DataContext); // Step 2: Hook-ის გამოყენება
};

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({ pizzas: [], desserts: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pizzasResponse = await fetch('https://pizza-and-desserts.p.rapidapi.com/pizzas', {
          method: 'GET',
          headers: {
            'x-rapidapi-key': 'daa52f3b51msh2faebbf17449b23p1e62edjsnaf774535ad2b', // გამოიყენეთ თქვენი API კლავი
            'x-rapidapi-host': 'pizza-and-desserts.p.rapidapi.com',
          },
        });
        const pizzas = await pizzasResponse.json();

        const dessertsResponse = await fetch('https://pizza-and-desserts.p.rapidapi.com/desserts', {
          method: 'GET',
          headers: {
            'x-rapidapi-key': 'daa52f3b51msh2faebbf17449b23p1e62edjsnaf774535ad2b',
            'x-rapidapi-host': 'pizza-and-desserts.p.rapidapi.com',
          },
        });
        const desserts = await dessertsResponse.json();

        setData({ pizzas, desserts });
      } catch (error) {
        setError('Failed to fetch data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []); // Step 3: API-ს მოთხოვნა ხდება მხოლოდ ერთხელ

  return (
    <DataContext.Provider value={{ data, isLoading, error }}>
      {children}
    </DataContext.Provider>
  );
};
