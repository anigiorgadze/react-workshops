import  { useEffect, useState } from 'react'
import { fetchPosts } from '../api/fetchPosts'

const useCustomHooks = (url, page) => {
    const [data, setData] = useState([])
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        fetchPosts(`${url}?_page=${page}&_limit=10`).then((data) => setData(data)).catch((error) => setError(error.message)).finally(()=>setIsLoading(false))
    }, [url, page])

    return [data, setData, error, isLoading]
}

export default useCustomHooks
