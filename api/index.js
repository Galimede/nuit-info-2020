import express from 'express';
import spots from './routes/spots.js';

const app = express();
const port = 8000;

app.use('/spots', spots);

app.listen(port, () => console.log(`The api listening on port localhost:${port}!`));

export default app;
