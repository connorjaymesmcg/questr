import express from 'express';

const router = express.Router();

// Import route handler functions from controllers
import { getPosts } from '../controllers/posts.js';

router.get('/', getPosts);

export default router;
