import React from 'react';
import { useNavigate } from 'react-router-dom';

const MyEventCard = ({ event }) => {
    const navigate = useNavigate(); // Hook to programmatically navigate

    const handleClick = () => {
        navigate(`/my-event-info/${event._id}`); // Navigate to event detail page with event id
    };

    const imageUrl = `https://picsum.photos/1600/900/?${event.title}`;

    return (
        <div className='flex flex-col items-center justify-center w-72 m-6 rounded-md'>
            
            <img className='rounded-md w-11/12' alt='cover' src={imageUrl} />

            <button
                className='bg-white rounded-lg w-full p-2 -mt-10 hover:scale-[1.01] hover:cursor-pointer'
                onClick={handleClick} // Navigate on button click
            >
                <h1 className='text-lg p-1'> {event.title} </h1>

                <div className='w-full p-1 flex items-center justify-between text-slate-600 text-xs'>
                    <div> {new Date(event.date).toDateString()} | {event.time} </div>
                    <div> {event.city}, {event.country} </div>
                </div>
            </button>
        </div>
    );
}

export default MyEventCard;
