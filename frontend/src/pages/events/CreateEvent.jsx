import React, { useState } from 'react';
import axios from 'axios';
import { useUser } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

import Date from '../../assets/date.png'
import Location from '../../assets/place.png'
import Desc from '../../assets/desc.png'
import SearchImg from '../../assets/search.png'
import Price from '../../assets/price.png'

const CreateEvent = () => {
    
    const API_URL = 'http://localhost:5000';

    const navigate = useNavigate(); // Initialize useNavigate
    // Extracting User id from Clerk
    const { user } = useUser();
    const userId = user.id; 
    const userName = user.firstName + " " + user.lastName;

    const [SearchInput, setSearchInput] = useState('');
    
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endDate, setEndDate] = useState('');
    const [endTime, setEndTime] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [price, setPrice] = useState('');
    const [imageUrl, setImageUrl] = useState('https://rb.gy/soufgm');

    const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;


    // SEARCH FUNCTION -----

    const handleSearch = async () => {
        
        if (SearchInput) {
            try {
                // Call Unsplash API to search for photos based on the input value
                const response = await axios.get(
                    `https://api.unsplash.com/search/photos?query=${SearchInput}&client_id=${UNSPLASH_KEY}`
                );
                
                // Check if there are any results
                if (response.data.results.length > 0) {
                    // Set the first image's URL from the response
                    const finalImageUrl = response.data.results[0].urls.regular;
                    setImageUrl(finalImageUrl); // Set the image URL to display the image
                } 
                else {
                    console.log('No images found for this search term.');
                }
            } 
            
            catch (error) {
                console.error('Error fetching the image:', error);
            }
        }
    };


    // SUBMIT FUNCTION -----

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Prepare the event data
        const eventData = {
            title,
            description,
            startDate,
            startTime,
            endDate,
            endTime,
            city,
            country,
            price,
            imageUrl,
            userName,
            userId
        };

        try {
            // Send POST request to the backend
            await axios.post(`${API_URL}/api/events`, eventData);

            // Navigate to home after successful event creation 
            navigate('/');
        } 
        
        catch (error) {
            console.error('Error creating event:', error);
        }
    };


    return (
        <>
            <div className="flex items-center justify-center h-[76vh] p-11 xl:px-36">
            <div className="relative w-full h-full max-w-full ">
                
                <div className='absolute inset-0 backdrop-blur-md bg-white/5 w-full h-fit border-2 border-white/15 rounded-xl p-8'>

                    <div className="relative z-10 flex justify-evenly items-start">

                        <div className='w-1/2 mr-6 '>
                            <div className='w-full h-96 bg-white/5 rounded-md mb-8'> 
                                {imageUrl && (
                                    <img 
                                        src={imageUrl} 
                                        alt='Generated'
                                        className='w-full h-full object-cover rounded-md'
                                    />
                                )}
                            </div>
                            <div className='flex justify-between items-center bg-white/15 rounded text-lg p-[10px] w-full focus:border-2 focus:border-white/25'>
                                <input type='text' placeholder='Enter a Keyword to generate cover image' value={SearchInput}
                                    onChange={(e) => setSearchInput(e.target.value)}
                                    className='outline-none bg-transparent w-3/4  tracking-wide font-light'/> 
                                <button onClick={handleSearch} 
                                    className='flex justify-evenly items-center bg-white/25 px-2 rounded tracking-wide font-normal hover:bg-white/35 text-black'>
                                    <img src={SearchImg} className='w-5 mr-2 font-mono' alt='search-icon'/>
                                    Search
                                </button>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4 flex flex-col z-20 w-1/2">
                            
                            {/* Title */}
                            <input required type="text" id="title" value={title} placeholder="Event Name"
                                onChange={(e) => setTitle(e.target.value)}
                                className="bg-transparent outline-none text-3xl p-2 h-10 tracking-wide focus:scale-105" 
                            />

                            <div className='flex justify-between items-start'>
                                <img src={Date} alt='date' className='bg-white/15 mr-4 p-2 rounded-md w-12' />

                                <div className='bg-white/15 w-full rounded-md p-2'>

                                    <div className='flex items-center justify-between text-lg pb-2'>
                                        <h1 className='text-xl'> From </h1>

                                        <div className='flex items-center justify-evenly w-3/4 '>
                                            {/* Time */}
                                            <input required type="time" id="time" value={startTime} 
                                                onChange={(e) => setStartTime(e.target.value)}
                                                className="bg-white/25 rounded px-2 py-1 w-1/3 mr-2 outline-none focus:border-2 focus:border-white/25"
                                            />
                                            {/* Date */}
                                            <input required type="date" id="date" value={startDate}
                                                onChange={(e) => setStartDate(e.target.value)}
                                                className="bg-white/25 rounded px-2 py-1 w-2/3 outline-none focus:border-2 focus:border-white/25"
                                            />
                                        </div>
                                    </div>

                                    <div className='flex items-center justify-between text-lg'>
                                        <h1 className='text-xl'> To </h1>

                                        <div className='flex items-center justify-evenly w-3/4 '>
                                            {/* Time */}
                                            <input required type="time" id="time" value={endTime} 
                                                onChange={(e) => setEndTime(e.target.value)}
                                                className="bg-white/25 rounded px-2 py-1 w-1/3 mr-2 outline-none focus:border-2 focus:border-white/25"
                                            />
                                            {/* Date */}
                                            <input required type="date" id="date" value={endDate}
                                                onChange={(e) => setEndDate(e.target.value)}
                                                className="bg-white/25 rounded px-2 py-1 w-2/3 outline-none focus:border-2 focus:border-white/25"
                                            />
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className='flex justify-between items-start'>
                                <img src={Location} alt='date' className='bg-white/15 mr-4 p-2 rounded-md w-12' />

                                <div className='bg-white/15 w-full rounded-md p-2'>

                                    <div className='flex items-center justify-between text-lg'>
                                        <h1 className='text-xl'> At </h1>

                                        <div className='flex items-center justify-evenly w-3/4 '>
                                            {/* Country */}
                                            <input
                                                type="text" id="country" value={country} placeholder="Country"
                                                onChange={(e) => setCountry(e.target.value)}
                                                className="bg-white/25 rounded px-2 py-1 w-1/3 mr-2 outline-none focus:border-2 focus:border-white/25"
                                                required
                                            />
                                            {/* City */}
                                            <input
                                                type="text" id="city" value={city} placeholder="City Name"
                                                onChange={(e) => setCity(e.target.value)}
                                                className="bg-white/25 rounded px-2 py-1 w-2/3 outline-none focus:border-2 focus:border-white/25"
                                                required
                                            />
                                        </div>
                                    </div>

                                </div>
                                
                            </div>

                            <div className='flex justify-between items-start'>
                                <img src={Price} alt='date' className='bg-white/15 mr-4 p-2 rounded-md w-12' />

                                <div className='bg-white/15 w-full rounded-md p-2'>

                                    <div className='flex items-center justify-between text-lg'>
                                        <h1 className='text-xl'> Price </h1>

                                        <div className='flex items-center justify-start w-3/4 '>
                                            {/* Price */}
                                            <input
                                                type="number" id="price" value={price} placeholder="Price"
                                                onChange={(e) => setPrice(e.target.value)}
                                                className="bg-white/25 rounded px-2 py-1 w-1/3 outline-none focus:border-2 focus:border-white/25"
                                                required
                                            />
                                        </div>
                                    </div>

                                </div>
                                
                            </div>


                            <div className='flex justify-between items-start'>
                                <img src={Desc} alt='date' className='bg-white/15 mr-4 p-2 rounded-md w-12' />
                                {/* Description */}
                                <textarea required id="description" value={description} placeholder="Event description"
                                    onChange={(e) => setDescription(e.target.value)}
                                    className=" bg-white/15 w-full h-40 py-2 px-3 outline-none rounded-md focus:border-2 focus:border-white/25"
                                />
                            </div>

                            {/* Create Button */}
                            <button
                                type="submit"
                                className="bg-gray-200 w-[89%] ml-auto h-12 text-xl text-gray-600 font-semibold px-4 py-2 rounded-md hover:bg-white hover:text-gray-700 hover:scale-[1.01]">
                                Create Event
                            </button>

                        </form>

                    </div>

                </div>
                
            </div>
            </div>
        </>
    );
};

export default CreateEvent;