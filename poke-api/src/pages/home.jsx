import React, { useState } from 'react';
import axios from 'axios';

function Home() {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonData, setPokemonData] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/pokemon/${pokemonName}`);
      setPokemonData(response.data);
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
      setPokemonData(null);
    }
  };

  return (
    <div className = "search">
      <h1>Pokémon Search</h1>
      <input
        type="text"
        placeholder="Enter Pokémon name"
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {pokemonData && (
        <div>
          <h2>{pokemonData.name}</h2>
          {/* Render other details about the Pokémon */}
        </div>
      )}
    </div>
  );
}

export default Home;
