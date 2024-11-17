import React from "react";

const MovieModal = ({ movie, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white rounded-lg p-8 w-80 max-w-md relative">
      {/* Close Icon */}
      <button
        onClick={onClose}
        className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Movie Content */}
      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/150"
        }
        alt={movie.Title}
        className="w-full h-64 object-cover rounded-md"
      />
      <h2 className="mt-4 text-xl font-bold">{movie.Title}</h2>
      <p className="text-gray-600">Year: {movie.Year}</p>
      <p className="text-gray-600">Type: {movie.Type}</p>
    </div>
  </div>
);

export default MovieModal;
