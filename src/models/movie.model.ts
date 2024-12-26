import mongoose from 'mongoose';
import { Movie } from '../types';

const movieSchema = new mongoose.Schema<Movie>(
  {
    title: { 
      type: String, 
      required: true,
      unique: true 
    },
    genre: { 
      type: String, 
      required: true 
    },
    rating: { 
      type: Number, 
      required: true,
      min: 0,
      max: 10 
    },
    streamingLink: { 
      type: String, 
      required: true 
    }
  },
  { 
    timestamps: true 
  }
);

// Create indexes for search functionality
movieSchema.index({ title: 'text', genre: 'text' });

export const MovieModel = mongoose.model<Movie>('Movie', movieSchema);