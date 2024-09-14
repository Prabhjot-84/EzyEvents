import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const MyEventInfo = () => {
    const { id } = useParams(); // Get the event id from the URL
    const [event, setEvent] = useState(null);

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/events/${id}`);
                setEvent(response.data);
            } catch (error) {
                console.error('Error fetching event:', error);
            }
        };

        fetchEvent();
    }, [id]);

    if (!event) return <div>Loading...</div>;

    return (
        <div className='p-8'>
            <h1 className='text-2xl font-bold'>{event.title}</h1>
            <p className='text-lg'>{event.description}</p>
            <p>Date: {new Date(event.date).toDateString()}</p>
            <p>Time: {event.time}</p>
            <p>Location: {event.city}, {event.country}</p>
        </div>
    );
};

export default MyEventInfo;
