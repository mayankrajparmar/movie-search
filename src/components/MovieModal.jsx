import React, { useEffect, useState } from "react";

const MovieModal = ({ movie, onClose }) => {
  const [movieDetails, setMovieDetails] = useState(null);

  // Fetch movie details by imdbID
  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?i=${movie.imdbID}&apikey=${
            import.meta.env.VITE_OMDB_API_KEY
          }`
        );
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    if (movie?.imdbID) {
      fetchMovieDetails();
    }
  }, [movie]);

  if (!movieDetails) return null;

  return (
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
            movieDetails.Poster !== "N/A"
              ? movieDetails.Poster
              : "https://via.placeholder.com/150"
          }
          alt={movieDetails.Title}
          className="w-full h-64 object-cover rounded-md"
        />
        <h2 className="mt-4 text-xl font-bold">{movieDetails.Title}</h2>
        <p className="text-gray-600">Year: {movieDetails.Year}</p>
        <p className="text-gray-600">Genre: {movieDetails.Genre}</p>
        <p className="text-gray-600">Director: {movieDetails.Director}</p>
        <p className="text-gray-600">Actors: {movieDetails.Actors}</p>

        <p className="text-gray-600">
          Ratings:{" "}
          {movieDetails.Ratings && movieDetails.Ratings.length > 0
            ? movieDetails.Ratings.map((rating, index) => (
                <span key={index}>
                  {rating.Source}: {rating.Value}
                  {index < movieDetails.Ratings.length - 1 && ", "}
                </span>
              ))
            : "N/A"}
        </p>
      </div>
    </div>
  );
};

export default MovieModal;
