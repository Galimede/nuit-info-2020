import express from 'express';

const sessions = express.Router();

sessions.get('/', (req, res) => {
  res.send('Hello World');
});

sessions.get('/:id', (req, res) => {

});

sessions.post('/', (req, res) => {

});

export default sessions;
