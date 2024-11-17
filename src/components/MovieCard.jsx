import React from "react";

const MovieCard = ({ movie, onMovieSelect }) => (
  <div
    onClick={() => onMovieSelect(movie)}
    className="cursor-pointer rounded-md p-4 bg-white hover:shadow-lg shadow-[5px_5px_0px_0px_rgba(244,63,94)] border border-rose-500"
  >
    <img
      src={
        movie.Poster !== "N/A"
          ? movie.Poster
          : "https://via.placeholder.com/150"
      }
      alt={movie.Title}
      className="w-full h-64 object-cover rounded-md"
    />
    <h3 className="mt-4 text-lg font-semibold">{movie.Title}</h3>
    <p className="text-gray-600">{movie.Year}</p>
  </div>
);

export default MovieCard;
