import React from 'react';

const Location = ({place, setModalData}) => {
    const {name, slots} = place;
    const totalSlots = slots.length;
    return (
        <div className='borde shadow-2xl text-center py-8 rounded-lg'>
            <p className='text-xl font-bold pb-4'>{name}</p>
            <p className='font-semibold'>{ slots.length > 0 ? slots[0] : <span className='text-red-600'>No Slots Available</span>  }</p>
            <p className='pt-1'>{totalSlots} {totalSlots > 1 ? 'slots' : 'slot'} left</p>
            <label for="booking-modal" disabled={totalSlots === 0} class="btn btn-secondary my-4 font-semibold" onClick={() => setModalData(place)}>Book Now</label>
            
        </div>
    );
};

export default Location;