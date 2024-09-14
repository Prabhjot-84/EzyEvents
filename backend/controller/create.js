import EventModel from '../models/Event.js';

export const addEventFunc = async (req, res) => {
    try {
        const { title, description, date, time, city, country, userId } = req.body;

        // Check for missing fields
        if (!title || !description || !date || !time || !city || !country || !userId) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        // Create a new event
        const newEvent = new EventModel({
            title,
            description,
            date,
            time,
            city,
            country,
            userId
        });

        // Save the event to the database
        const savedEvent = await newEvent.save();


        // Send a success response
        res.status(200).json({
            message: 'Event added successfully',
            event: savedEvent
        });
    } catch (error) {
        console.error('Error adding event:', error.message);
        res.status(500).json({
            message: 'An error occurred while adding the event',
            error: error.message
        });
    }
};
