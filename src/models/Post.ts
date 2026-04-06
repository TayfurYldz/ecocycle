import { Document, model, Schema } from 'mongoose';
const postSchema = new Schema({
  title: String,
  content: String,
});
const Post = model<Document>('Post', postSchema);
export { Post };