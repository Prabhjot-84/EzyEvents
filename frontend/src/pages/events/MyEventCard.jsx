import React from 'react';
import { useNavigate } from 'react-router-dom';
import moment from "moment";

import LocationLogo from '../../assets/location.png'

const MyEventCard = ({ event }) => {
    const navigate = useNavigate(); // Hook to programmatically navigate

    const handleClick = () => {
        navigate(`/my-event-info/${event._id}`); // Navigate to event detail page with event id
    };

    return (
        <div className='flex flex-col items-center justify-center w-72 m-6 p-2 rounded inset-0 backdrop-blur-sm bg-white/15 border-[1px] border-white/25 text-white hover:cursor-pointer hover:scale-[1.02] hover:bg-white/10 hover:border-2'
            onClick={handleClick} // Navigate on button click
        >
            
            <img className='rounded w-full h-40 object-cover' alt='cover' src={event.imageUrl} />

            <div className='rounded w-full p-2' >

                <div className='w-full flex items-center justify-between text-xs'>
                    <div> {moment(event.startDate).format("MMMM Do YYYY")}{" "} </div>
                    <div className='flex items-center'> 
                        <img className='h-3 mr-1' src={LocationLogo} alt='logo' /> 
                        {event.city}, {event.country} 
                    </div>
                </div>

                <h1 className='pt-1 '> {event.title} </h1>

            </div>
        </div>
    );
}

export default MyEventCard;
