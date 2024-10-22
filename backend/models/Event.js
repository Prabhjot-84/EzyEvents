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
    startDate: {
        type: Date,
        required: true
    },
    startTime: {
        type: String,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    endTime: {
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
    price: {
        type: Number,
        required: true,
        min: 0
    },
    imageUrl: {
        type: String,
        default: 'https://rb.gy/soufgm' // Default image URL
    },
    userName: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    registeredUsers: [{
        userName: { type: String, required: true },
        userId: { type: String, required: true }
    }]
});

const EventModel = mongoose.model('Event', EventSchema);

export default EventModel;