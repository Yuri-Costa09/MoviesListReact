import Header from "./components/Header.jsx";
import "./App.css";
import { useState, useEffect } from "react";
import ListMovies from "./components/ListMovies";

const API_KEY = "1be7ad40";
const API_URL = "https://www.omdbapi.com/";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async () => {
    if (!searchTerm) return;

    try {
      const response = await fetch(
        `${API_URL}?s=${searchTerm}&apikey=${API_KEY}`
      );
      const data = await response.json();

      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setMovies([]);
        console.log("Nenhum filme encontrado:", data.Error);
      }
    } catch (err) {
      console.error("erro ao buscar filmes:", err);
    }
  };

  useEffect(() => {
    handleSearch();
  }, [searchTerm]);

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="container-fluid">
      <Header
        valueSearch={searchTerm}
        onSearchTermChange={handleSearchTermChange}
      />
      <div>
        <ListMovies movies={movies} />
      </div>
    </div>
  );
}

export default App;
