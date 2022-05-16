import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import EventDate from './EventDate';
import EventLocation from './EventLocation';


const HostEvent = () => {
    const [date, setDate] = useState(new Date())
    const [user] = useAuthState(auth);
    return (
        <>
            <span className='text-blue-700'> {user?.displayName}</span>
            <EventDate date={date} setDate={setDate}></EventDate>
            <EventLocation date={date}></EventLocation>
        </>

    );
};

export default HostEvent;