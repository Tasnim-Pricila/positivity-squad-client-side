import React from 'react';
import { useForm } from 'react-hook-form';

const AddDonor = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = async (data, e) => {
        const userInfo = data;
    
        
    }
    return (
        <div  className=' mx-auto w-1/2 my-12'>
            <p className='text-2xl text-primary'>Add a Donor</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Name Field  */}
                        <div >
                            <input placeholder='Name' type='text' {...register("name", { required: true, })}
                                className='input input-bordered input-secondary w-full max-w-xs my-4'/>

                        </div>
                        <small className='text-red-500 '>
                            {errors.name?.type === 'required' && "Name is required"}
                        </small>
                        {/* Email Field  */}
                        <div >
                            <input placeholder='Email'  {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })}
                               className='input input-bordered input-secondary w-full max-w-xs my-4'/>

                        </div>

                        <small className='text-red-500 '>
                            {errors.email?.type === 'required' && "Email is required"}
                            {errors.email?.type === 'pattern' && "Email pattern is wrong"}

                        </small>

                        {/* PAssword field  */}
                        <div >
                            <input placeholder='Password' type='password' {...register("password", { required: true, pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/, minLength: 8 })}
                                className='input input-bordered input-secondary w-full max-w-xs my-4' />

                        </div>
                        <small className=' text-red-500'>
                            {errors.password?.type === 'required' && "Password is required"}
                            {errors.password?.type === 'minLength' && "Password must be 8 characters long"}
                            {errors.password?.type === 'pattern' && "Must use 1 uppercase, 1 lowercase, 1 number and 1 special character"}

                        </small>

                        {/* Confirm PAssword field  */}
                        <div>
                            <input placeholder='Confirm Password' type='password' {...register("cpassword", { required: true, })}
                                className='input input-bordered input-secondary w-full max-w-xs my-4'/>

                        </div>
                        <small className=' text-red-500'>
                            {errors.cpassword?.type === 'required' && "Password is required"}
                        </small>

                        {/* Submit Button  */}
                        <input type="submit" className='btn btn-active btn-secondary w-1/2 mt-6' />
                    </form>
        </div>
    );
};

export default AddDonor;