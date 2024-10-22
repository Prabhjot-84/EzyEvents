import EventModel from '../models/Event.js';

export const deleteEvent = async (req, res) => {
    const { id } = req.params;

    try {
        // Find the event by ID and delete it
        const deletedEvent = await EventModel.findByIdAndDelete(id);

        if (!deletedEvent) {
            return res.status(404).json({ message: 'Event not found' });
        }

        // Respond with success message
        return res.status(200).json({ message: 'Event deleted successfully' });
    } 
    
    catch (error) {
        console.error('Error deleting event:', error);
        return res.status(500).json({ message: 'Server error, failed to delete event' });
    }
}