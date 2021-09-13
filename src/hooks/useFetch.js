import { useEffect, useState } from 'react';
import { getAllUsers } from '../helpers/crud-fetch';

const initialState = {
    loading: true,
    usuarios: []
}

export const useFetch = () => {
    const [ data, setData ] = useState(initialState);

    useEffect(() => {
            getAllUsers()
            .then(res => {
                setData({
                    loading: false,
                    usuarios: res.users
                })
            })
    },[]);

    return data;
};


