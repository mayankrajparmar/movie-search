import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, onMovieSelect }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 w-full max-w-7xl">
    {movies.length > 0 ? (
      movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          onMovieSelect={onMovieSelect}
        />
      ))
    ) : (
      <p className="text-center text-gray-600 col-span-full">
        No movies found.
      </p>
    )}
  </div>
);

export default MovieList;
