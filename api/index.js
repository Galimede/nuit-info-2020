import express from 'express';
import exampleRouter from './routes/route.js';

const app = express();
const port = 3000;

app.use('/example', exampleRouter);

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));
