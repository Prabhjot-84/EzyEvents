import EventModel from '../models/Event.js';
import UserModel from '../models/User.js';


export const checkAndCreateUser = async (req, res) => {
    const { userId, userName } = req.body;

    try {
        // Check if user already exists in the database
        const existingUser = await UserModel.findOne({ userId });

        if (!existingUser) {
            // If the user doesn't exist, create a new user
            const newUser = new UserModel({
                userName: userName,
                userId: userId,
                registeredEvents: [] // Initialize an empty array for registered events
            });
            await newUser.save();
            return res.status(201).json({ message: 'User created successfully' });
        }

        // If the user exists, return success
        res.status(200).json({ message: 'User already exists' });
    } catch (error) {
        console.error('Server Error :', error);
        res.status(500).json({ message: 'Server error' });
    }
};


export const addEventFunc = async (req, res) => {
    try {
        const { title, description, startDate, startTime, endDate, endTime,
            city, country, price, imageUrl, userName, userId
        } = req.body;

        // Check for missing required fields
        if (
            !title ||
            !description ||
            !startDate ||
            !startTime ||
            !endDate ||
            !endTime ||
            !city ||
            !country ||
            !price ||
            !userName ||
            !userId
        ) {
            return res.status(400).json({ message: 'All fields are required except imageUrl.' });
        }

        // Create a new event
        const newEvent = new EventModel({
            title, description, startDate, startTime, endDate, endTime,
            city, country, price, 
            imageUrl: imageUrl, 
            userName, 
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