import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Location from './Location';
import BookingModal from './BookingModal';

const EventLocation = ({ date }) => {
    const [place, setPlace] = useState([]);
    const [modalData, setModalData] = useState(null)

    useEffect(() => {
        fetch('http://localhost:5000/place')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setPlace(data);
            })
        }, [])

    return (
        <div>
            <div>
                <p className='text-pu=rimary text-xl font-semibold text-center my-12 text-primary'>Available Locations on {format(date, 'PP')}</p>
            </div>
            <div className='grid grid-cols-3 gap-12 mb-32'>
                {
                    place.map(p =>
                        <Location 
                            key={p._id}
                            place={p}
                            setModalData={setModalData}
                        ></Location>)
                }
            </div>
            {modalData && <BookingModal 
                            modalData={modalData} 
                            date={date}
                            setModalData={setModalData}
                            >
                        </BookingModal>}
        </div>
        
    );
};

export default EventLocation;