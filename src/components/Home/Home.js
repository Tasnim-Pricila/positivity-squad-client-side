import React from 'react';
import useEvents from '../../CustomHook/useEvents';
import Event from './Event';

const Home = () => {

    const [events] = useEvents('http://localhost:5000/events');

    return (
        <>
            <div className='grid grid-cols-4 container mx-auto gap-8 my-12'>
                {
                    events.map(event =>
                        <Event key={event._id}
                            event={event}>
                        </Event>
                    )
                }
            </div>
        </>
    );
};

export default Home;