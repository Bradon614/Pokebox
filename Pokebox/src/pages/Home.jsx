import React, { useEffect, useState } from "react";
import PokemonCard from "../Components/PokemonCard";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const limit = 20;

  useEffect(() => {
    fetchPokemons(page);
  }, [page]);

  async function fetchPokemons(pageNum) {
    const offset = (pageNum - 1) * limit;
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
    const data = await res.json();

    const details = await Promise.all(data.results.map(async (p) => {
      const pokeRes = await fetch(p.url);
      return await pokeRes.json();
    }));

    setPokemons(details);
  }

  const filteredPokemons = pokemons.filter((p) => {
    const matchesSearch = p.name.includes(search.toLowerCase());
    const matchesType = typeFilter
      ? p.types.some((t) => t.type.name === typeFilter)
      : true;
    return matchesSearch && matchesType;
  });

  return (
    <div>
      <header className="header">
        <h1>Pokédex</h1>
        <div className="search-filter">
          <input
            type="text"
            placeholder="Rechercher un Pokémon..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
              <option value="">Tous les types</option>
              <option value="fire">🔥 Feu</option>
              <option value="water">💧 Eau</option>
              <option value="grass">🌱 Plante</option>
              <option value="electric">⚡ Électrique</option>
              <option value="ice">❄️ Glace</option>
              <option value="fighting">🥊 Combat</option>
              <option value="poison">☠️ Poison</option>
              <option value="ground">🌍 Sol</option>
              <option value="flying">🪽 Vol</option>
              <option value="psychic">🔮 Psy</option>
              <option value="bug">🐛 Insecte</option>
              <option value="rock">🪨 Roche</option>
              <option value="ghost">👻 Spectre</option>
              <option value="dragon">🐉 Dragon</option>
              <option value="dark">🌑 Ténèbres</option>
              <option value="steel">⚙️ Acier</option>
              <option value="fairy">✨ Fée</option>
              <option value="normal">🔘 Normal</option>
          </select>
        </div>
      </header>

      <main>
        <div className="pokemon-container">
          {filteredPokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
        <div className="pagination">
          <button onClick={() => setPage((p) => Math.max(p - 1, 1))}>⬅ Précédent</button>
          <span>{page}</span>
          <button onClick={() => setPage((p) => p + 1)}>Suivant ➡</button>
        </div>
      </main>
    </div>
  );
};

export default Home;
