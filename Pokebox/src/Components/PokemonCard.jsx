import React from "react";
import { typeColors, typeColorsBadges } from "../js/ColorsType";

export default function PokemonCard({ pokemon }) {
  const mainType = pokemon.types[0];
  const bgColor = typeColors[mainType] || 'bg-gray-200';

  return (
    <div className="perspective-1000">
      <div className="relative w-full h-72 transition-transform duration-500 transform-style-preserve-3d hover:rotate-y-180">
        <div
          className="absolute w-full h-full backface-hidden p-4 rounded-xl shadow-md"
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
        <div
          className="absolute w-full h-full backface-hidden rotate-y-180 p-4 rounded-xl shadow-md text-white flex flex-col items-center justify-center gap-2"
          style={{
            background: `linear-gradient(135deg, ${typeColors[mainType]}36 50%, transparent 80%)`,
          }}
        >
          <h3 className="text-xl font-bold mb-2">Stats</h3>
          <p>❤️ HP: {pokemon.stats.hp}</p>
          <p>⚔️ Attack: {pokemon.stats.attack}</p>
          <p>🛡️ Defense: {pokemon.stats.defense}</p>
          <p className="text-s mt-3 text-center px-2">
            {pokemon.name} is a {mainType}-type Pokémon known for its unique abilities.
          </p>
        </div>
      </div>
    </div>
  );
}
