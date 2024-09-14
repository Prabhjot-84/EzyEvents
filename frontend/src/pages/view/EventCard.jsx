import React from 'react';
import { useNavigate } from 'react-router-dom';

const EventCard = ({ event }) => {
    const navigate = useNavigate(); // Hook to programmatically navigate

    const imageUrl = `https://picsum.photos/1600/900/?${event.title}`;

    const handleClick = () => {
        navigate(`/register-event-page/${event._id}`); // Navigate to event page with event ID
    };

    return (
        <div className='flex flex-col items-center justify-center w-72 m-6 p-3 bg-white rounded-md'>
            
            <img className='rounded w-full' alt='cover' src={imageUrl} />

            <button
                className='bg-white w-full p-2 hover:scale-[1.01] hover:cursor-pointer'
                onClick={handleClick} // Add onClick handler
            >
                <h1 className='text-lg p-1'> {event.title} </h1>

                <div className='w-full flex items-center justify-between text-slate-600 text-xs'>
                    <div> {new Date(event.date).toDateString()} | {event.time} </div>
                    <div> {event.city}, {event.country} </div>
                </div>
            </button>
        </div>
    );
};

export default EventCard;
