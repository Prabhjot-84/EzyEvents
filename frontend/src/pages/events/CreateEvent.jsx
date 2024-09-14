import React, { useState } from 'react';
import axios from 'axios'; // Make sure to install axios
import { useUser } from '@clerk/clerk-react';

const CreateEvent = () => {

    // Extracting User id from Clerk
    const { user } = useUser();
    const userId = user.id;

    
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Prepare the event data
        const eventData = {
            title,
            description,
            date,
            time,
            city,
            country,
            userId
        };

        try {
            // Send POST request to the backend
            const response = await axios.post('http://localhost:5000/api/events', eventData);
            console.log('Event created:', response.data);
        } catch (error) {
            console.error('Error creating event:', error);
        }
    };

    return (
        <>
            <div className='p-8 '>
                {/* Form for creating an event */}
                <form onSubmit={handleSubmit} className="space-y-4 flex flex-col">
                    {/* Title */}
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-1/4 rounded p-2 border-none bg-[#ffffff25] text-white text-lg mb-5"
                        placeholder="Enter event Title"
                        required
                    />
                    
                    {/* Description */}
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-4/5 h-28 rounded p-2 border-none bg-[#ffffff25] text-white text-lg"
                        placeholder="Enter event description"
                        required
                    />
                    
                    <div className='flex items-center justify-start'>
                        {/* Date */}
                        <input
                            type="date"
                            id="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="w-1/6 rounded p-2 border-none bg-[#ffffff25] text-white text-lg my-5 mr-10"
                            required
                        />
                        {/* Time */}
                        <input
                            type="time"
                            id="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            className="w-1/6 rounded p-2 border-none bg-[#ffffff25] text-white text-lg my-5"
                            required
                        />
                    </div>
                    
                    <div>
                        {/* City */}
                        <input
                            type="text"
                            id="city"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            className="w-1/6 rounded p-2 border-none bg-[#ffffff25] text-white text-lg mb-5 mr-10"
                            placeholder="Enter city"
                            required
                        />
                        {/* Country */}
                        <input
                            type="text"
                            id="country"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            className="w-1/6 rounded p-2 border-none bg-[#ffffff25] text-white text-lg mb-5"
                            placeholder="Enter country"
                            required
                        />
                    </div>

                    {/* Create Button */}
                    <button
                        type="submit"
                        className="bg-blue-500 w-[150px] h-12 text-xl text-white font-semibold mx-auto px-4 py-2 rounded hover:bg-yellow-300 hover:text-slate-800">
                        Create
                    </button>
                </form>
            </div>
        </>
    );
};

export default CreateEvent;
