import React, { useEffect, useState } from 'react';
import MyEventCard from './MyEventCard';
import axios from 'axios';
import CreateBtn from '../../assets/create.png';
import { Link } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react'; // Import Clerk's useUser to get userId

const MyEvents = () => {
    const { user } = useUser();  // Getting the user object from Clerk
    const userId = user.id;  // Extracting userId from the logged-in user 
    const API_URL = 'http://localhost:5000';  // Replace with your actual API URL

    // State to store events
    const [events, setEvents] = useState([]);

    // Fetch the events created by the logged-in user
    useEffect(() => {
        const fetchEvents = async () => {
            try {
                // Fetch events using axios
                const response = await axios.get(`${API_URL}/api/events`, {
                    params: { userId },  // Sending userId as a query parameter
                    withCredentials: true,  // If using cookies for auth
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                // Set the events state with the fetched events for the logged-in user
                setEvents(response.data.events);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };

        // Call the fetchEvents function only if userId is available
        if (userId) {
            fetchEvents();
        }
    }, [userId]);

    return (
        <>
            <div className='flex flex-col justify-start items-start p-8'>

                <Link to='/create-event' className='mx-auto my-6 w-[250px] border-2 flex justify-evenly items-center text-slate-800 bg-sky-500 rounded-md hover:scale-[1.02] hover:bg-yellow-300'>
                    <h1 className='font-semibold text-xl'> Create Event </h1>
                    <img src={CreateBtn} alt='add' />
                </Link>

                {/* Render event cards */}
                <div className='flex flex-wrap justify-center md:justify-normal'>
                    {events.length > 0 ? (
                        events.map((event) => (
                            <MyEventCard key={event._id} event={event} />  // Pass event data as a prop
                        ))
                    ) : (
                        <p>No events created yet.</p>
                    )}
                </div>

            </div>
        </>
    );
}

export default MyEvents;