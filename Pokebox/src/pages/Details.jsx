import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import RadarChart from "../Components/RadarChart";

const typeColors = {
  fire: "#FDDFDF", water: "#DEF3FD", grass: "#DEFDE0", electric: "#FCF7DE",
  ice: "#E0F5FF", fighting: "#E6E0D4", poison: "#E0DEF8", ground: "#F4E7DA",
  flying: "#F5F5F5", psychic: "#FCEAFF", bug: "#F8D5A3", rock: "#D5D5D4",
  ghost: "#D7C2FF", dragon: "#97B3E6", dark: "#C6C6C6", steel: "#D1D1E0",
  fairy: "#FCEAFF", normal: "#F5F5F5"
};

const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await res.json();
      setTimeout(() => {
        setPokemon(data);
        setLoading(false);
      }, 1500);
    }
    fetchData();
  }, [name]);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="pokeball"></div>
        <p>Chargement...</p>
      </div>
    );
  }

  return (
    <div className="details-bg">
      <div className="details-container show">
        <div className="details-left">
          <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} />
        </div>
        <div className="details-right">
          <h1>{pokemon.name.toUpperCase()}</h1>
          <div>
            {pokemon.types.map((t) => (
              <span
                key={t.type.name}
                className="type-badge"
                style={{ background: typeColors[t.type.name] || "#777" }}
              >
                {t.type.name}
              </span>
            ))}
          </div>
          <p><strong>Height:</strong> {pokemon.height}</p>
          <p><strong>Weight:</strong> {pokemon.weight}</p>
          <h3>Abilities</h3>
          <ul>
            {pokemon.abilities.map((a) => <li key={a.ability.name}>{a.ability.name}</li>)}
          </ul>
          <h3>Stats</h3>
          <RadarChart stats={pokemon.stats} />
          <button className="back-btn" onClick={() => navigate(-1)}>⬅ Retour</button>
        </div>
      </div>
    </div>
  );
};

export default Details;
