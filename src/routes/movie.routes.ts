import express from 'express';
import { 
  getAllMovies, 
  searchMovies, 
  addMovie, 
  updateMovie, 
  deleteMovie 
} from '../controllers/movie.controller';
import { auth, adminAuth } from '../middleware/auth.middleware';

const router = express.Router();

router.get('/movies', getAllMovies);
router.get('/search', searchMovies);
router.post('/movies', [auth, adminAuth], addMovie);
router.put('/movies/:id', [auth, adminAuth], updateMovie);
router.delete('/movies/:id', [auth, adminAuth], deleteMovie);

export default router;