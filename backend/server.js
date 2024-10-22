// server.js
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import { addEventFunc, checkAndCreateUser } from './controller/create.js';
import { getAllEvents, getEventDetails, readEvent, readUserEvents } from './controller/read.js';
import { updateEvent } from './controller/update.js';
import { deleteEvent } from './controller/delete.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = [
    'http://localhost:3000',
    'https://ezyevents.netlify.app'
  ];
  
  const corsOptions = {
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true
  };

app.use(cors(corsOptions)); // Apply CORS middleware

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(process.env.MongoDB_URI);


// Routes

// CREATE
app.post('/api/events', addEventFunc); // route for adding events
app.post('/api/users/check-user', checkAndCreateUser);

// READ
app.get('/api/events', readUserEvents);
app.get('/api/allevents', getAllEvents);  // route to get all events
app.get('/api/my-event-info/:id', readEvent);  // Route to read an event
app.get('/api/register-event-page/:eventId', getEventDetails);

// UPDATE 
app.put('/api/update-event/:id', updateEvent);

// DELETE 
app.delete('/api/delete-event/:id', deleteEvent);


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`); 
});