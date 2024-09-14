import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const RegisterEvent = () => {
    const { eventId } = useParams(); // Extract eventId from URL parameters
    const [event, setEvent] = useState(null);
    const API_URL = 'http://localhost:5000'; // Adjust to your API URL

    useEffect(() => {
        const fetchEvent = async () => {
            try {
              const response = await axios.get(`${API_URL}/api/register-event-page/${eventId}`);
              setEvent(response.data);
            } catch (error) {
                console.error('Error fetching event:', error); // Detailed error log
            }
        };

        if (eventId) { // Ensure eventId is available before making the request
            fetchEvent();
        } else {
            console.error('No eventId found'); // Debugging log
        }
    }, [eventId]);

    if (!event) return <div className="p-8 text-center">Loading...</div>;
    const imageUrl = `https://picsum.photos/1600/900/?${event.title}`;

    return (
        <div className='p-8 mx-auto text-white rounded-lg '>
            
            <img className='rounded-md w-full h-96' alt='cover' src={imageUrl} />

            <h1 className='text-3xl font-bold mb-4'>{event.title}</h1>
            <p className='text-lg mb-4'>{event.description}</p>
            <div className='mb-4'>
                <span className='font-semibold'>Date:</span> {new Date(event.date).toDateString()}
            </div>
            <div className='mb-4'>
                <span className='font-semibold'>Time:</span> {event.time}
            </div>
            <div className='mb-4'>
                <span className='font-semibold'>Location:</span> {event.city}, {event.country}
            </div>
            <div className='mt-4 text-center'>
                <button
                    className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded'
                    onClick={() => alert('Registration functionality not implemented')}
                >
                    Register
                </button>
            </div>
        </div>
    );
};

export default RegisterEvent;
