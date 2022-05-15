import React, { useState } from 'react';
import useEvents from '../../CustomHook/useEvents';
import Event from './Event';

const Home = () => {

    const [events, setEvents] = useEvents('http://localhost:5000/events');
    const [text, setText] = useState('');

    const handleSearch = (e) => {
        const searchText = e.target.value;
        setText(searchText.toLowerCase());  
        // console.log(searchText);      
    }
    const handleSubmit = () => {
        const matched = events.filter(event => event.title.toLowerCase().includes(text));
        setEvents(matched);
    }

    return (
        <>
            {/* Search Area  */}
            <div>
                <h1 className='uppercase text-center mt-12 mb-6 text-2xl font-semibold'>We grow by helping people in need</h1>
                <div className="form-control">
                    <div className="input-group justify-center">
                        <input type="text" name="search" placeholder="Search…" className="input input-bordered w-1/3 focus:outline-none" onBlur={handleSearch} />
                        <button className="btn btn-square bg-blue-700 border-0 hover:bg-primary-focus" onClick={handleSubmit} >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className='grid md:grid-cols-4 grid-cols-1 container mx-auto gap-8 my-12'>
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