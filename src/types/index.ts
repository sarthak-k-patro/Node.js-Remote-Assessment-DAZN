export interface Movie {
  title: string;
  genre: string;
  rating: number;
  streamingLink: string;
}

export interface MovieDocument extends Movie {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  username: string;
  password: string;
  role: "user" | "admin";
}

export interface JwtPayload {
  userId: string;
  role: string;
}
