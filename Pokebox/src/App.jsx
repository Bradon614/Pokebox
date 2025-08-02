import { useState, useEffect } from 'react'
import PokemonCard from "./Components/PokemonCard";

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function fetchPokemons() {
      const fetched = [];
      for (let i = 1; i <= 54; i++) {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const data = await res.json();
        fetched.push({
          id: data.id,
          name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
          image: data.sprites.other["official-artwork"].front_default,
          types: data.types.map(t => t.type.name),
        });
      }
      setPokemons(fetched);
    }

    fetchPokemons();
  }, []);
  
  return (
    <>
      <div className="min-h-screen p-8 bg-gradient-to-br from-sky-300 to-sky-300">
        <h1 className="text-white text-6xl font-serif text-center mb-10">Pokémon</h1>
        <div className="max-w-8xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {pokemons.map(pokemon => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      </div>
    </>
  )
}

export default App;
