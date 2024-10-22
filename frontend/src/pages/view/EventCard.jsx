import React from 'react';
import { useNavigate } from 'react-router-dom';
import moment from "moment";

import LocationLogo from '../../assets/location.png'

const EventCard = ({ event }) => {
    const navigate = useNavigate(); // Hook to programmatically navigate 

    const handleClick = () => {
        navigate(`/register-event-page/${event._id}`); // Navigate to event page with event ID
    };

    return (
        <div className='flex flex-col items-center justify-center w-72 m-6 p-2 rounded inset-0 backdrop-blur-sm bg-white/15 border-[1px] border-white/25 text-white'>
            
            <img className='rounded w-full h-40 object-cover' alt='cover' src={event.imageUrl} />

            <div className='rounded w-full p-2' >

                <div className='w-full flex items-center justify-between text-xs'>
                    <div> {moment(event.startDate).format("MMMM Do YYYY")}{" "} </div>
                    <div className='flex items-center'> 
                        <img className='h-3 mr-1' src={LocationLogo} alt='logo' /> 
                        {event.city}, {event.country} 
                    </div>
                </div>

                <h1 className='py-1 '> {event.title} </h1>

            </div>

            <button className='bg-white/80 hover:bg-white hover:scale-[1.01] text-black font-semibold w-full p-1 rounded-sm hover:cursor-pointer'
                onClick={handleClick} // Navigate on button click
            >
                Register
            </button>

        </div>
    );
};

export default EventCard;