import axios from 'axios';
import { useState, useEffect } from 'react';

const useAxios = (config) => {
    const [data, setData] = useState('');
    const [pending, setPending] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        axios(config)
            .then((res) => {
                console.log(res);
                if (!res.status == 200) {
                    throw Error('Error!');
                }
                return res.data
            })
            .then((data) => {
                setData(data);
                setPending(false);
            })
            .catch((err) => {
                setError(err.message);
            });
        }, []);
        
    return { data, pending, error };
}
 
export default useAxios;