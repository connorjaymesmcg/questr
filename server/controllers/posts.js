// Handlers for routes...

// Get access to Mongoose Schema model
import PostMessage from '../models/postMessage.js';

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();

    console.log(postMessages);

    // Return array of messages in DB if successful
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;

  // Create post to Mongoose Schema
  const newPost = new PostMessage(post);

  try {
    await newPost.save();

    // 201 = Created
    res.status(201).json(newPost);
  } catch (error) {
    // 409 = Conflict
    res.status(409).json({ message: error.message });
  }
};
