import React from 'react';

const Event = ({ event }) => {
    const colors = ["violet", "hotpink", "orange", "skyblue", "#a59aed", "palegreen", "palevioletred", "goldenrod"];
    const { title, img } = event;
    return (
        <>
            <div className="card shadow-xl">
                <figure><img src={img} alt="" className="h-[250px]" /></figure>
                <div>
                    <button style={{
                        backgroundColor: `${colors[Math.floor(Math.random() * colors.length)]}`
                    }} className='px-2 py-3 text-center font-semibold w-full capitalize'>
                        {title}  </button>
                </div>
            </div>
        </>
    );
};

export default Event;