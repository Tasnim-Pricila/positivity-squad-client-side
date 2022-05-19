import { format } from 'date-fns';
import React, { useState } from 'react';
import Location from './Location';
import BookingModal from './BookingModal';
import { useQuery } from 'react-query';

const EventLocation = ({ date }) => {

    const [modalData, setModalData] = useState(null)
    const formattedDate = format(date, 'PP');

    const {data : place, isLoading, refetch} = useQuery(['available', formattedDate], () => fetch(`http://localhost:5000/available?date=${formattedDate}`)
            .then(res => res.json())
    )

    if(isLoading){
        return <p>Loading...</p>
    }

    return (
        <div>
            <div>
                <p className='text-pu=rimary text-xl font-semibold text-center my-12 text-primary'>Available Locations on {formattedDate}</p>
            </div>
            <div className='grid grid-cols-3 gap-12 mb-32'>
                {
                    place?.map(p =>
                        <Location 
                            key={p._id}
                            place={p}
                            setModalData={setModalData}
                        ></Location>)
                }
            </div>
            {modalData && 
                <BookingModal 
                    modalData={modalData} 
                    date={date}
                    setModalData={setModalData}
                    refetch={refetch}
                    >
                </BookingModal>
            }
        </div>
        
    );
};

export default EventLocation;