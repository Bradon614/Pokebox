import React from "react";
import { typeColors, typeColorsBadges } from "../js/ColorsType";

export default function PokemonCard({ pokemon }) {
  const mainType = pokemon.types[0];
  const bgColor = typeColors[mainType] || 'bg-gray-200';

  return (
    <div
      className="p-4 rounded-xl shadow-md hover:scale-105 transition relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${typeColors[mainType]}36 50%, transparent 80%)`,
      }}
    >
      <img src={pokemon.image} alt={pokemon.name} className="w-28 h-28 mx-auto" />
      <p className="text-sm text-gray-100 text-center">N° {pokemon.id.toString().padStart(4, '0')}</p>
      <h2 className="text-2xl font-semibold text-white text-center">{pokemon.name}</h2>
      <div className="flex justify-center gap-2 mt-2">
        {pokemon.types.map((type) => (
          <span
            key={type}
            className={`px-5 py-2 text-white text-s rounded-2xl ${typeColorsBadges[type] || 'bg-gray-300'}`}
          >
            {type}
          </span>
        ))}
      </div>
    </div>
  );
}