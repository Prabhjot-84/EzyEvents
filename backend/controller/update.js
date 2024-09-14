import EventModel from '../models/Event.js';

export const updateEvent = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, date, time, city, country, userId } = req.body;

        // Check for missing fields
        if (!title || !description || !date || !time || !city || !country || !userId) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        // Find the event by ID and update it
        const updatedEvent = await EventModel.findByIdAndUpdate(
            id,
            { title, description, date, time, city, country, userId },
            { new: true }  // Return the updated event
        );

        if (!updatedEvent) {
            return res.status(404).json({ message: 'Event not found.' });
        }

        res.status(200).json({
            message: 'Event updated successfully',
            event: updatedEvent
        });
    } catch (error) {
        console.error('Error updating event:', error.message);
        res.status(500).json({
            message: 'An error occurred while updating the event',
            error: error.message
        });
    }
};
