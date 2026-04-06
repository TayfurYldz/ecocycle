import mongoose, { Schema } from 'mongoose';

const challengeSchema = new Schema({
  title: String,
  description: String,
  startDate: Date,
  endDate: Date
});

const Challenge = mongoose.model('Challenge', challengeSchema);

export { Challenge };