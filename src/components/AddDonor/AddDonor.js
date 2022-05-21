import React from 'react';
import { useForm } from 'react-hook-form';

const AddDonor = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const imgStorageKey = '966d2411c1e18d4935625f7409fb75e7';

    const onSubmit = async data => {
        console.log(data);
        const img = data.image[0];
        const formData = new FormData();
        formData.append('Synthia', img);
        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                // if (result.success) {
                    const img = result.data.url;
                    const donor = {
                        name: data.name,
                        email: data.email,
                        image: img
                    }
                    //Send to database
                    fetch(`http://localhost:5000/donor`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(donor)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            console.log(inserted);
                        })
                // }
            })
    }
    return (
        <div className=' mx-auto w-1/3 my-12'>
            <p className='text-2xl text-primary'>Add a Donor</p>
            <form onSubmit={handleSubmit(onSubmit)} className='mx-auto my-8'>
                {/* Name Field  */}
                <div >
                    <input placeholder='Name' type='text' {...register("name", { required: true, })}
                        className='input input-bordered input-secondary w-screen max-w-[25rem] my-4 mx-auto' />

                </div>
                <small className='text-red-500 '>
                    {errors.name?.type === 'required' && "Name is required"}
                </small>

                {/* Email Field  */}
                <div >
                    <input placeholder='Email'  {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })}
                        className='input input-bordered input-secondary w-full max-w-[25rem] my-4' />

                </div>

                <small className='text-red-500 '>
                    {errors.email?.type === 'required' && "Email is required"}
                    {errors.email?.type === 'pattern' && "Email pattern is wrong"}

                </small>

                {/* image field  */}
                <div >
                    <label htmlFor="image" className='font-semibold my-4 block'>Upload a Photo:</label>
                    <input type='file' {...register("image", { required: true, })}
                    />

                </div>
                <small className=' text-red-500'>
                    {errors.image?.type === 'required' && "Password is required"}
                </small>

                {/* Submit Button  */}
                <input type="submit" className='btn btn-active btn-secondary w-full mt-6 ' />
            </form>
        </div>
    );
};

export default AddDonor;