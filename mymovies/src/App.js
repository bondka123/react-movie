import React, { useState } from "react";
import MovieList from "./components/MovieList";
import Filtre from "./components/Filtre";

const App = () => {
  const [movies, setMovies] = useState([
    {
      titre: "Inception",
      description: "Un voleur qui vole des rêves.",
      posterURL: "https://image.tmdb.org/t/p/w200/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
      note: 5,
    },
    {
      titre: "Interstellar",
      description: "Exploration spatiale et amour.",
      posterURL: "https://image.tmdb.org/t/p/w200/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
      note: 4,
    },
  ]);

  const [filtreTitre, setFiltreTitre] = useState("");
  const [filtreNote, setFiltreNote] = useState("");

  const [nouveauFilm, setNouveauFilm] = useState({
    titre: "",
    description: "",
    posterURL: "",
    note: 1,
  });

  const handleAddMovie = () => {
    if (
      !nouveauFilm.titre.trim() ||
      !nouveauFilm.description.trim() ||
      !nouveauFilm.posterURL.trim() ||
      !nouveauFilm.note
    ) {
      alert("Merci de remplir tous les champs !");
      return;
    }
    setMovies([...movies, nouveauFilm]);
    setNouveauFilm({ titre: "", description: "", posterURL: "", note: 1 });
  };

  const moviesFiltres = movies.filter(
    (movie) =>
      movie.titre.toLowerCase().includes(filtreTitre.toLowerCase()) &&
      (filtreNote === "" || movie.note >= Number(filtreNote))
  );

  return (
    <div style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <h1>Application de cinéma</h1>

      <h2>Ajouter un nouveau film</h2>
      <input
        type="text"
        placeholder="Titre"
        value={nouveauFilm.titre}
        onChange={(e) => setNouveauFilm({ ...nouveauFilm, titre: e.target.value })}
        style={{ width: "100%", marginBottom: 10 }}
      />
      <textarea
        placeholder="Description"
        value={nouveauFilm.description}
        onChange={(e) => setNouveauFilm({ ...nouveauFilm, description: e.target.value })}
        style={{ width: "100%", marginBottom: 10 }}
      />
      <input
        type="text"
        placeholder="URL de l'affiche"
        value={nouveauFilm.posterURL}
        onChange={(e) => setNouveauFilm({ ...nouveauFilm, posterURL: e.target.value })}
        style={{ width: "100%", marginBottom: 10 }}
      />
      <select
        value={nouveauFilm.note}
        onChange={(e) => setNouveauFilm({ ...nouveauFilm, note: Number(e.target.value) })}
        style={{ width: "100%", marginBottom: 10 }}
      >
        {[1, 2, 3, 4, 5].map((n) => (
          <option key={n} value={n}>{n}</option>
        ))}
      </select>
      <button onClick={handleAddMovie}>Ajouter</button>

      <h2>Filtrer les films</h2>
      <Filtre
        filtreTitre={filtreTitre}
        setFiltreTitre={setFiltreTitre}
        filtreNote={filtreNote}
        setFiltreNote={setFiltreNote}
      />

      <MovieList movies={moviesFiltres} />
    </div>
  );
};

export default App;
