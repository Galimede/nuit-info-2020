import mongoose from 'mongoose';

const sessionSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    datetime_start: mongoose.Schema.Types.Date,
    datetime_end: mongoose.Schema.Types.Date,
    spot: mongoose.Schema.Types.ObjectId,
    waterman: mongoose.Schema.Types.String,
    city: mongoose.Schema.Types.String,
});

export default sessionSchema;
