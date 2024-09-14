import EventModel from '../models/Event.js'; // Import the Event model

// Function to fetch events for a specific user
export const readUserEvents = async (req, res) => {
    
    try {
        const { userId } = req.query; // Get the userId from query parameters

        // Check if userId is provided
        if (!userId) {
            return res.status(400).json({ message: 'UserId is required.' });
        }

        // Fetch events for the given userId from the database
        const events = await EventModel.find({ userId });

        // Check if events are found
        if (events.length === 0) {
            return res.status(404).json({ message: 'No events found for this user.' });
        }

        // Send a success response with the list of events
        res.status(200).json({
            message: 'Events fetched successfully',
            events
        });
    } 
    
    catch (error) {
        console.error('Error fetching events:', error.message);
        res.status(500).json({
            message: 'An error occurred while fetching events',
            error: error.message
        });
    }
};




export const getAllEvents = async (req, res) => {
    try {
        // Fetch all events from the database
        const events = await EventModel.find();

        // Send the events in the response
        res.status(200).json(events);
    } catch (error) {
        console.error('Error fetching events:', error.message);
        res.status(500).json({
            message: 'An error occurred while fetching events',
            error: error.message
        });
    }
};



export const readEvent = async (req, res) => {
    try {
        const { id } = req.params; // Get the event ID from the URL parameters

        // Find the event by ID
        const event = await EventModel.findById(id);

        // Check if the event was found
        if (!event) {
            return res.status(404).json({ message: 'Event not found.' });
        }

        // Return the event details
        res.status(200).json(event);
    } catch (error) {
        // Handle any errors that occurred
        console.error('Error fetching event:', error.message);
        res.status(500).json({
            message: 'An error occurred while fetching the event',
            error: error.message
        });
    }
};



export const getEventDetails = async (req, res) => {
    const { eventId } = req.params;

    try {
        console.log('Fetching event with ID:', eventId); // Debugging log

        // Fetch the event from the database using the eventId
        const event = await Event.findById(eventId);
        console.log('Event found:', event); // Debugging log

        // Check if the event exists
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }

        // Send the event data as a response
        res.json(event);
    } catch (error) {
        console.error('Error fetching event:', error); // Detailed error log
        res.status(500).json({ message: 'Server error' });
    }
};
