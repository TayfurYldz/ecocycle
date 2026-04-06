import { Document, model, Schema } from 'mongoose';
const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
});
const User = model<Document>('User', userSchema);
export { User };