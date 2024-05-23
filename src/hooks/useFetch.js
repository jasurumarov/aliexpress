import axios from '../api'
import {useState, useEffect} from 'react'

export const useFetch = (api, ...rest) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        axios
            .get(api)
            .then(res => setData(res))
            .catch(res => setError(res))
            .finally(() => setLoading(false))
    }, [...rest])
    return {data, loading, error}
}
