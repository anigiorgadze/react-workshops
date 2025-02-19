import  { useEffect, useState } from 'react'
import { fetchData } from '../api/fetchData'


const useCustomHooks = (url, skip) => {
    const [data, setData] = useState([])
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true);
        fetchData(`${url}?limit=10&skip=${skip}`)
            .then((response) => {
                if (Array.isArray(response.products)) {
                    setData(response.products);  
                } else {
                    setError('Invalid data format');
                }
            })
            .catch((error) => setError(error.message))
            .finally(() => setIsLoading(false));
    }, [url, skip]);

    return [data , error, isLoading]
}

export default useCustomHooks
