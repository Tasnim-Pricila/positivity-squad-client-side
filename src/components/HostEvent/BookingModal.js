import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ modalData, date , setModalData }) => {
    const { name, slots } = modalData;
    const handleSubmit = e => {
        e.preventDefault();
        const slot = e.target.slot.value;
        console.log(slot);
        setModalData(null);
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg mb-6 text-center">Book Place for <span className='text-primary'>{name}</span></h3>
                    <form className='flex flex-col items-center' onSubmit={handleSubmit}>
                        <input type="text" placeholder="Date" defaultValue={format(date, 'PP')} className="input input-bordered input-primary w-full max-w-xs mb-4 text-black font-semibold" />
                        <select name='slot' className="select select-primary w-full max-w-xs mb-4">
                            {
                                slots.map(slot => 
                                    <option>{slot}</option>
                            )}

                        </select>
                        <input type="name" name='name' placeholder="Your Name" className="input input-bordered input-primary w-full max-w-xs mb-4" />
                        <input type="email" name='email' placeholder="Your Email" className="input input-bordered input-primary w-full max-w-xs mb-4" />
                        <input type="number" name='phone' placeholder="Your Phone" className="input input-bordered input-primary w-full max-w-xs mb-4" />
                        
                        <input type="submit" value="Submit" className="btn btn-primary w-full max-w-xs mb-4" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;