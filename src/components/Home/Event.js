import React from 'react';
import { useNavigate } from 'react-router-dom';

const Event = ({ event }) => {
    const colors = ["violet", "hotpink", "orange", "skyblue", "#a59aed", "palegreen", "palevioletred", "goldenrod"];
    const { title, img, _id } = event;
    const navigate = useNavigate();
    return (
        <>
            <div className="card shadow-xl">
                <figure><img src={img} alt="" className="h-[250px] w-full object-cover" /></figure>
                <div>
                    <button style={{
                        backgroundColor: `${colors[Math.floor(Math.random() * colors.length)]}`
                    }} className='px-2 py-3 text-center font-semibold w-full capitalize' onClick={() => navigate(`/events/${_id}`)}>
                        {title}  </button>
                </div>
            </div>
        </>
    );
};

export default Event;