// Using Mongoose
import mongoose from 'mongoose';

// Create Mongoose schema
const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model('PostMessage', postSchema);

// Exporting mongoose message from the PostMessage file
export default PostMessage;
