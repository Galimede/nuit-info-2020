import express from 'express';

const exampleRouter = express.Router();

exampleRouter.get('/', (req, res) => {
  res.send('Hello World');
});

export default exampleRouter;
