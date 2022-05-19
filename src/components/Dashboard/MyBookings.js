import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';

const MyBookings = () => {
    const [user] = useAuthState(auth);
    const email = user?.email;

    const { data: bookings, isLoading, refetch } = useQuery('booking', () =>
        fetch(`http://localhost:5000/booking?email=${email}`)
            .then(res => res.json())
    )
    if (isLoading) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <p className='text-2xl text-primary my-8'>Welcome to Your Dashboard</p>
            <div class="overflow-x-auto">
                <table class="table table-zebra w-full text-center">
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
                            bookings.map((booking , index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td className='font-semibold text-secondary'>{booking.eventName}</td>
                                    <td> {booking.date} </td>
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