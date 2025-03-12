import { useState, useEffect } from 'react';

const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'x-rapidapi-key': 'daa52f3b51msh2faebbf17449b23p1e62edjsnaf774535ad2b',  // გამოიყენეთ თქვენი API კლავი
            'x-rapidapi-host': 'pizza-and-desserts.p.rapidapi.com',
          }
        });

        if (!response.ok) throw new Error('Failed to fetch data');
        
        const result = await response.json(); // .json() გამოიყენეთ, რადგან პასუხი JSON-ია
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, error, isLoading };
};

export default useFetchData;
