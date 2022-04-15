import * as mongoose from 'mongoose';

export const LocationSchema = new mongoose.Schema({
  name: String,
  description: String,
  coordinates: Object,
  imageNames: Array,
  link: String,
});