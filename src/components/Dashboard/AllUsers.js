import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';

const AllUsers = () => {
    // const [user, loading] = useAuthState(auth);
    // const email = user?.email;
    
    const { data : users, isLoading, refetch} = useQuery('users', () => 
        fetch('http://localhost:5000/users', {
            method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
        })
         .then(res => res.json()))
         
    if(isLoading){
        return <p>Loading...</p>
    }

    const makeAdmin = (email) => {
        fetch(`http://localhost:5000/user/admin/${email}`,{
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then (data => {
            refetch();
            console.log(data);   
        })
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
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map( (user, index) =>
                                <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td className='font-semibold text-secondary'> {user.email} </td>
                                    {user.role !== 'admin' &&
                                         <td> <button className="btn btn-xs" onClick={()=> makeAdmin(user.email)}>Make Admin</button> </td>
                                    }   
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