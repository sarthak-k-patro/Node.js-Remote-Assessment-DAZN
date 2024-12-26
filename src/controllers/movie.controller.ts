import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { MovieModel } from "../models/movie.model";

export const getAllMovies = asyncHandler(
  async (req: Request, res: Response) => {
    const movies = await MovieModel.find().sort({ createdAt: -1 });
    res.json(movies);
  }
);

export const searchMovies = asyncHandler(
  async (req: Request, res: Response) => {
    const { q } = req.query;

    if (!q) {
      res.status(400).json({ message: "Search query is required" });
      return;
    }

    try {
      const movies = await MovieModel.find({
        $or: [
          { title: { $regex: q.toString(), $options: "i" } },
          { genre: { $regex: q.toString(), $options: "i" } },
        ],
      });
      if (!movies.length)
        res.json({
          message: `No Movie with '${q}' Title or Genre Exists.`,
        });
      res.json(movies);
    } catch (error) {
      console.error("Error searching movies:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
);

export const addMovie = asyncHandler(async (req: Request, res: Response) => {
  const { title, genre, rating, streamingLink } = req.body;

  const movieExists = await MovieModel.findOne({ title });
  if (movieExists) {
    res.status(400);
    throw new Error("Movie already exists");
  }

  const movie = await MovieModel.create({
    title,
    genre,
    rating,
    streamingLink,
  });

  res.status(201).json(movie);
});

export const updateMovie = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, genre, rating, streamingLink } = req.body;

  const movie = await MovieModel.findById(id);
  if (!movie) {
    res.status(404);
    throw new Error("Movie not found");
  }

  movie.title = title || movie.title;
  movie.genre = genre || movie.genre;
  movie.rating = rating || movie.rating;
  movie.streamingLink = streamingLink || movie.streamingLink;

  const updatedMovie = await movie.save();
  res.json(updatedMovie);
});

export const deleteMovie = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;

  const movie = await MovieModel.findById(id);
  if (!movie) {
    res.status(404);
    throw new Error("Movie not found");
  }

  await movie.deleteOne();
  res.json({ message: "Movie removed" });
});
