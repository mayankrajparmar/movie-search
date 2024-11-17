import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar.jsx";
import MovieList from "./components/MovieList";
import MovieModal from "./components/MovieModal";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const fetchMovies = async (query = "popular") => {
    try {
      const { data } = await axios.get(
        `http://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`
      );
      if (data.Search) setMovies(data.Search);
      else setMovies([]);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const handleSearch = (query) => {
    if (query.trim()) fetchMovies(query);
  };

  useEffect(() => {
    fetchMovies("popular");
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 ">
      <nav className="bg-[#020c1f] py-6 md:px-12 px-6 flex justify-between">
        <img src="./logo.webp" alt="logo image" className="w-24" />
        <h1 className="text-[#fcb72b] font-bold text-base md:text-xl">
          AI-Powered Results
        </h1>
      </nav>
      <div className="flex flex-col items-center p-4">
        <SearchBar onSearch={handleSearch} />
        <MovieList movies={movies} onMovieSelect={setSelectedMovie} />
        {selectedMovie && (
          <MovieModal
            movie={selectedMovie}
            onClose={() => setSelectedMovie(null)}
          />
        )}
      </div>
    </div>
  );
}

export default App;
