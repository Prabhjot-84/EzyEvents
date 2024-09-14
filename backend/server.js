// server.js
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import { addEventFunc } from './controller/create.js'
;
import { getAllEvents, getEventDetails, readEvent, readUserEvents } from './controller/read.js';
import { updateEvent } from './controller/update.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
    origin: 'http://localhost:3000',  // Allow requests from this origin
    credentials: true, // Enable credentials (cookies, authorization headers, etc.)
};

app.use(cors(corsOptions)); // Apply CORS middleware

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(process.env.MongoDB_URI);


// Routes

// CREATE
app.post('/api/events', addEventFunc); // route for adding events

// READ
app.get('/api/events', readUserEvents);
app.get('/api/allevents', getAllEvents);  // route to get all events
app.get('/api/my-event-info/:id', readEvent);  // Route to read an event
app.get('/api/register-event-page/:eventId', getEventDetails);

// UPDATE
app.put('/api/update-event/:id', updateEvent);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`); 
});
