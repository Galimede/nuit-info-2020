import express from 'express';
import mongoose from 'mongoose';
import settings from './config.js';
import sessions from './routes/sessions.js';
import spots from './routes/spots.js';

mongoose.connect(settings.uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const app = express();
const port = 8000;

app.use('/spots', spots);
app.use('/sessions', sessions);

app.listen(port, () => console.log(`The api listening on port localhost:${port}!`));

export default app;
