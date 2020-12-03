import express from 'express';

const exampleRouter = express.Router();

exampleRouter.get('/', (req, res) => {
  res.send('Birds home page');
});

export default exampleRouter;
