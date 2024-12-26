import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import movieRoutes from "./routes/movie.routes";
import authRoutes from "./routes/auth.routes";
dotenv.config();

const app = express();

// Middleware
app.use(cors());
// app.use(helmet());
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        fontSrc: [
          "'self'",
          "https://fonts.googleapis.com",
          "https://fonts.gstatic.com",
        ],
      },
    },
  })
);
app.use(express.json());

// Routes
app.use("/", authRoutes);
app.use("/", movieRoutes);

// Error handling middleware
app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.error(err.stack);
    res.status(500).json({ message: "Something went wrong!" });
  }
);

// MongoDB connection
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/movie-lobby";
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });
