import React from 'react';
import { useNavigate } from 'react-router-dom';
import LocationLogo from '../../assets/location.png'

const MyEventCard = ({ event }) => {
    const navigate = useNavigate(); // Hook to programmatically navigate

    const handleClick = () => {
        navigate(`/my-event-info/${event._id}`); // Navigate to event detail page with event id
    };

    const imageUrl = `https://picsum.photos/1600/900/?${event.title}`; 

    return (
        <div className='flex flex-col items-center justify-center w-72 m-6 p-3 bg-white rounded-md'>
            
            <img className='rounded w-full' alt='cover' src={imageUrl} />

            <button
                className='bg-white w-full p-2 hover:scale-[1.01] hover:cursor-pointer'
                onClick={handleClick} // Navigate on button click
            >
                <h1 className='text-lg pb-1 '> {event.title} </h1>

                <div className='w-full flex items-center justify-between text-slate-600 text-xs'>
                    <div> {new Date(event.date).toDateString()} | {event.time} </div>
                    <div className='flex items-center'> <img className='h-3 mr-1' src={LocationLogo} /> {event.city}, {event.country} </div>
                </div>
            </button>
        </div>
    );
}

export default MyEventCard;
