import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true, 
        unique: true
    },
    registeredEvents: [{
        eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event' }, // Reference to the Event schema
    }]
});

const UserModel = mongoose.model('User', UserSchema);

export default UserModel;
