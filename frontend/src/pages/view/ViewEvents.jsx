import React, { useEffect, useState } from 'react';
import EventCard from './EventCard.jsx';
import axios from 'axios';

const ViewEvents = () => {
    const [events, setEvents] = useState([]);
    const API_URL = 'http://localhost:5000';  // Replace with your actual API URL

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get(`${API_URL}/api/allevents`, {
                    withCredentials: true,  // If using cookies for auth
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                // Assuming response.data is an array of events
                setEvents(response.data);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };

        fetchEvents();
    }, []);

    return (
        <div className='flex flex-col p-8'>
            <h1 className='text-white text-xl mb-8'>Have a look at all the Listed Events</h1>
            <div className='flex flex-wrap'>
                {events.length > 0 ? (
                    events.map((event) => (
                        <EventCard key={event._id} event={event} />
                    ))
                ) : (
                    <p>No events available.</p>
                )}
            </div>
        </div>
    );
}

export default ViewEvents;
