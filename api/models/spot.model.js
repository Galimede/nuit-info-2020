import mongoose from 'mongoose';

const spotSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    longitude: mongoose.Schema.Types.Number,
    latitude: mongoose.Schema.Types.Number,
    swimmers: mongoose.Schema.Types.Number,
    score_polution: mongoose.Schema.Types.String,
    adherent: mongoose.Schema.Types.Number,
});

export default spotSchema;
