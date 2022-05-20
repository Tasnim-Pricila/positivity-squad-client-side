import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyBookings = () => {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    const email = user?.email;

    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/booking?email=${email}`,{
                method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    // console.log('res', res)
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        navigate('/login');
                    }
                    return res.json()
                })
                .then(data => setBookings(data));

        }
    }, [email])

    if (loading) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <p className='text-2xl text-primary my-8'>Welcome to Your Dashboard</p>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full text-center">
                    <thead>
                        <tr>
                            <th> No.</th>
                            <th>Event Name</th>
                            <th>Date</th>
                            <th>Slot</th>
                            <th>Booked By</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map( (booking, index) =>
                                <tr key={booking._id}>
                                    <th>{index + 1}</th>
                                    <td className='font-semibold text-secondary'>{booking.eventName}</td>
                                    <td>{booking.date} </td>
                                    <td>{booking.slot}</td>
                                    <td>{booking.userName}</td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyBookings;