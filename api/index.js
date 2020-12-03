import express from 'express';
import spots from './routes/spots.js';

const app = express();
const port = 8000;

app.use('/spots', spots);

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));
