import React, { useState } from 'react';
import { useQuery } from 'react-query';
import DeleteModal from '../Dashboard/DeleteModal';

const ManageDonors = () => {
    const [deletingDonor, setDeletingDonor] = useState(null);

    const { data : donors, isLoading, refetch} = useQuery('donors', () => 
        fetch('http://localhost:5000/donors', {
            method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
        })
         .then(res => res.json()))
         
    if(isLoading){
        return <p>Loading...</p>
    }

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/donor/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
         .then(res => res.json())
         .then(data => {
             console.log(data);
             setDeletingDonor(null);
             refetch();
         })
    }

    return (
        <div>
            {deletingDonor && <DeleteModal deletingDonor={deletingDonor} handleDelete={handleDelete} />}
            <p className='text-2xl text-primary'>Manage Donors</p>
            {donors.length}
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full text-center">
                    <thead>
                        <tr>
                            <th> No.</th>
                            <th> Name</th>
                            <th>Email</th>
                            <th>Image</th>
                            <th>Manage</th>                     
                        </tr>
                    </thead>
                    <tbody>
                        {
                            donors.map( (donor, index) =>
                                <tr key={donor._id}>
                                    <th>{index + 1}</th>
                                    <td>{donor.name}</td>
                                    <td>{donor.email}</td>
                                    
                                    <td className='font-semibold text-secondary'> {donor.image} </td>
                                    <td>
                                        <label for="deleteModal" class="btn btn-error" onClick={()=> setDeletingDonor(donor)}>Delete</label>
                                        
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDonors;