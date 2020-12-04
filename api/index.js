import express from 'express';
import mongoose from 'mongoose';
import settings from './config.js';
import sessions from './routes/sessions.js';
import spots from './routes/spots.js';

// Import env
require('dotenv').config();

if (process.env.PROD_URI) mongoose.connect(process.env.PROD_URI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
else mongoose.connect(settings.uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('were listening from echelon 📡');
});

const app = express();
const port = 8000;

app.use('/spots', spots);
app.use('/sessions', sessions);

app.listen(port, () => console.log(`The api listening on port localhost:${port}!`));

export { app, db };
