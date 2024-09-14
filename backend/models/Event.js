// models/Event.js
import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    }
});

const EventModel = mongoose.model('Event', EventSchema);

export default EventModel;
