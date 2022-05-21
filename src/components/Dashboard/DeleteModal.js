import React from 'react';

const DeleteModal = ({ deletingDonor, handleDelete }) => {
    return (
        <div>
            <input type="checkbox" id="deleteModal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are You Sure you want to delete {deletingDonor.name} ?</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div class="modal-action">
                        <button className='btn btn-error' onClick={() => handleDelete(deletingDonor._id)}>Yes</button>
                    <label for="deleteModal" class="btn">Cancel</label>
                </div>
            </div>
        </div>
        </div >
    );
};

export default DeleteModal;