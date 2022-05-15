import React from 'react';
import { useParams } from 'react-router-dom';
import useEvents from '../../CustomHook/useEvents';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const EventDate = ({date, setDate}) => {
    const { id } = useParams();
    const [events] = useEvents(`http://localhost:5000/events/${id}`);
    const { title, img } = events;
    
    // Day Picker 
    
    let footer;
    if (date) {
        footer = <p className='font-semibold mt-8'>You picked <b>{format(date, 'PP')}.</b> </p>;
    }
    else{
        footer = <p className='font-semibold mt-8'>Please pick a day.</p>;
    }
    const css = `
        .my-selected:not([disabled]) { 
            font-weight: bold; 
            border: 2px solid currentColor;
        }
        .my-selected:hover:not([disabled]) { 
            border-color: blue;
            color: blue;
        }
        .my-today { 
            font-weight: bold;
            font-size: 140%; 
            color: purple;
        }
    `;
    return (
        <div>
            <div className='grid grid-cols-2 py-12 gap-12 items-center justify-center'>
                <div className='justify-self-center'>
                    <img src={img} alt="" className='h-full object-cover' />
                </div>
                <div>
                    <p className='text-xl font-semibold text-fuchsia-500'>{title}</p>
                    <div>
                        <style>{css}</style>
                        <DayPicker mode="single"
                            selected={date}
                            onSelect={setDate}
                            modifiersClassNames={{
                                selected: 'my-selected',
                                today: 'my-today'
                            }}
                            modifiersStyles={{
                                disabled: { fontSize: '75%' }
                            }}
                            footer={footer}
                        />
                    </div>

                </div>
            </div>

        </div>
    );
};

export default EventDate;