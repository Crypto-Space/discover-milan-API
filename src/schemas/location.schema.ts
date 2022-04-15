import * as mongoose from 'mongoose';

export const LocationSchema = new mongoose.Schema({
    _id: String,
    name: String,
    description: String,
    coordinates: { latitude: Number, longitude: Number },
    imageNames: Array,
    link: String
});