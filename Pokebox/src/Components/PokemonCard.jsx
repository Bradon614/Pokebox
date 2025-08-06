import React from "react";
import { useNavigate } from "react-router-dom";

const typeColors = {
  fire: "#FF5733",
  water: "#33C1FF",
  grass: "#77DD77",
  electric: "#FFD700",
  psychic: "#FF69B4",
  default: "#999",
};

const PokemonCard = ({ pokemon }) => {
  const navigate = useNavigate();
  const mainType = pokemon.types[0].type.name;
  const glowColor = typeColors[mainType] || typeColors.default;

  return (
    <div
      className="pokemon-card"
      style={{ "--glow-color": glowColor }}
      onClick={() => navigate(`/details/${pokemon.name}`)}
    >
      <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} />
      <h3>{pokemon.name}</h3>
    </div>
  );
};

export default PokemonCard;