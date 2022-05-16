import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const BookingModal = ({ modalData, date, setModalData }) => {
    const { name, slots, _id } = modalData;
    const [user] = useAuthState(auth);
    const email = user?.email;
    const userName = user?.displayName;
    const formattedDate = format(date, 'PP');
    const handleSubmit = e => {
        e.preventDefault();
        const slot = e.target.slot.value;
        const booking = {
            bookingID: _id,
            eventName: name,
            date: formattedDate,
            slot,
            userName,
            email,
            phone: e.target.phone.value,
        }
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setModalData(null);
                    console.log(data);
                }
                else{
                    console.log(data);
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg mb-6 text-center">Book Place for <span className='text-primary'>{name}</span></h3>
                    <form className='flex flex-col items-center' onSubmit={handleSubmit}>
                        <input type="text" placeholder="Date" disabled defaultValue={format(date, 'PP')} className="input input-bordered input-primary w-full max-w-xs mb-4 font-semibold" />
                        <select name='slot' className="select select-primary w-full max-w-xs mb-4">
                            {
                                slots.map((slot, index) =>
                                    <option key={index}>{slot}</option>
                                )}

                        </select>
                        <input type="name" name='name' defaultValue={userName} disabled
                            placeholder="Your Name" className="input input-bordered input-primary w-full max-w-xs mb-4" />
                        <input type="email" name='email' defaultValue={email} disabled placeholder="Your Email" className="input input-bordered input-primary w-full max-w-xs mb-4" />
                        <input type="number" name='phone' placeholder="Your Phone" className="input input-bordered input-primary w-full max-w-xs mb-4" />

                        <input type="submit" value="Submit" className="btn btn-primary w-full max-w-xs mb-4" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;