import React from 'react';
import { useQuery } from 'react-query';

const AllUsers = () => {

    const { data : users, isLoading} = useQuery('user', () => 
        fetch('http://localhost:5000/users')
         .then(res => res.json()))
         
    if(isLoading){
        return <p>Loading...</p>
    }

    return (
        <div>
            <div>
            <p className='text-2xl text-primary my-8'>Welcome to Your Dashboard</p>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full text-center">
                    <thead>
                        <tr>
                            <th> No.</th>
                            <th>Email</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map( (user, index) =>
                                <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td className='font-semibold text-secondary'> {user.email} </td>
                                    
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>

        </div>
        </div>
    );
};

export default AllUsers;