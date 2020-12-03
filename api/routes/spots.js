import express from 'express';

const spots = express.Router();

spots.get('/', (req, res) => {
  res.send('Hello World');
});

spots.get('/:id', (req, res) => {

});

spots.post('/', (req, res) => {

});

export default spots;
