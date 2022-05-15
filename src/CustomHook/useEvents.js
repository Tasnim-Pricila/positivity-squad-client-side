import { useEffect, useState } from 'react';

const useEvents = (url) => {

    const [events, setEvents] = useState([]);

    useEffect(()=> {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setEvents(data);
        })
    },[url])

    return [events, setEvents];
    
};

export default useEvents;