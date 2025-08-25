import React from "react";

const Filtre = ({ filtreTitre, setFiltreTitre, filtreNote, setFiltreNote }) => {
  return (
    <div style={{ marginBottom: 20 }}>
      <input
        type="text"
        placeholder="Filtrer par titre"
        value={filtreTitre}
        onChange={(e) => setFiltreTitre(e.target.value)}
        style={{ marginRight: 10 }}
      />
      <select value={filtreNote} onChange={(e) => setFiltreNote(e.target.value)}>
        <option value="">Filtrer par note</option>
        {[1, 2, 3, 4, 5].map((n) => (
          <option key={n} value={n}>{n} et plus</option>
        ))}
      </select>
    </div>
  );
};

export default Filtre;
