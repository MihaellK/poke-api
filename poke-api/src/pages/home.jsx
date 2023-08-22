import React, { useState } from 'react';

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para lidar com a submissão da pesquisa
    console.log('Search submitted:', searchQuery);
  };

  return (
    <div className='search'>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search Pokémon"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
