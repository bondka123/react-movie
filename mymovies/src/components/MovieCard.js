import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: 10, marginBottom: 10 }}>
      <h3>{movie.titre} ({movie.note}/5)</h3>
      <img src={movie.posterURL} alt={movie.titre} width={150} />
      <p>{movie.description}</p>
    </div>
  );
};

export default MovieCard;
