import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import moment from "moment";

import Date from '../../assets/date.png'
import Place from '../../assets/place.png'
import Price from '../../assets/price.png'

const RegisterEvent = () => {
    const { eventId } = useParams(); // Extract eventId from URL parameters
    const navigate = useNavigate(); // Initialize useNavigate 
    const [event, setEvent] = useState([]);
    const API_URL = process.env.BACKEND_API_URL || 'http://localhost:5000';

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const response = await axios.get(`${API_URL}/api/register-event-page/${eventId}`, {
                    withCredentials: true,  // If using cookies for auth
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                setEvent(response.data.event);
            } 
            
            catch (error) {
                console.error('Error fetching event:', error);
            }
        };

        if (eventId) { // Ensure eventId is available before making the request
            fetchEvent();
        } 
        
        else {
            console.error('No eventId found'); // Debugging log
        }
    }, [API_URL, eventId]);

    if (!event) return <div className="p-8 text-center">Loading...</div>;


    // PAYMENT FUNCTION 

    const handlePayment = async () => {
        navigate('/');
    };

    return (
        <div className="flex items-center justify-center -mt-[89px] h-screen ">
            <div className="relative w-full h-full max-w-full overflow-hidden">
                
                <div className='absolute inset-0 backdrop-blur-md bg-white/5 w-full h-screen p-8 px-40 overflow-scroll overflow-x-hidden'>

                    <div className="relative z-10 flex flex-col">

                        <h1 className='text-3xl tracking-wide font-semibold mb-6 text-center'> {event.title} </h1>

                        <img src={event.imageUrl} alt='cover' className='w-full h-96 object-cover rounded-md mx-auto mb-3'/>

                        <i className='text-right mb-4'> Posted By : {event.userName} </i>

                        <div className='flex items-center mb-6'>
                            <img src={Date} alt=' ' className='w-9 h-9 mr-4'/>
                            <div className='text-xl'>
                                {moment(event.startDate).format("MMMM Do YYYY")}{" "}, {event.startTime} 
                                &ensp;-&nbsp; {moment(event.endDate).format("MMMM Do YYYY")}{" "}, {event.endTime} 
                            </div>
                        </div>

                        <div className='flex items-center mb-6'>
                            <img src={Place} alt=' ' className='w-9 h-9 mr-4'/>
                            <h2 className='text-xl'> {event.city}, {event.country} </h2>
                        </div>

                        <div className='flex items-center mb-6'>
                            <img src={Price} alt=' ' className='w-9 h-9 mr-4'/>
                            <h2 className='text-xl'> ₹ {event.price} </h2>
                        </div>

                        <i className='text-lg mb-8 font-light tracking-wide'> {event.description} </i>

                        <button className='bg-white border-2 border-purple-900 rounded text-black font-semibold w-52 tracking-wide mx-auto p-3 px-6 text-xl hover:bg-purple-900 hover:border-purple-400 hover:text-white hover:font-normal'
                            onClick={ handlePayment }
                        >
                            Register
                        </button>

                    </div>

                </div>
                
            </div>
        </div>
    );
};

export default RegisterEvent;
