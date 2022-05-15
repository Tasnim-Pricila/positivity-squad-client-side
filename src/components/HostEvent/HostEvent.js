import React, { useState } from 'react';
import EventDate from './EventDate';
import EventLocation from './EventLocation';


const HostEvent = () => {
    const [date, setDate] = useState(new Date())
    return (
        <>
            <EventDate date={date} setDate={setDate}></EventDate>
            <EventLocation date={date}></EventLocation>
        </>

    );
};

export default HostEvent;