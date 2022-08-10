import axios from 'axios';
import { useState, useEffect } from 'react';

const useFetch = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        axios.get(url).then(response => {
            setData(response.result);
            setLoading(false);
        }).catch(err => {
            setLoading(false);
            setError(err);
        })
    }, [url])

    return { data, loading, error }
}

export default useFetch