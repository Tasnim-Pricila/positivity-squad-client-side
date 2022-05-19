import React, { useEffect, useState } from 'react';

const useToken = (user) => {

    const [token,setToken] = useState('');
    useEffect(() => {
        console.log('user inside token', user)
    },[user])

    return [token]
};

export default useToken;