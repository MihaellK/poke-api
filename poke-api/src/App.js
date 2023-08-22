
import './App.css';

import Home from './pages/home';
import Card from './pages/card';

function App() {
  return (
    <div className="App">
      <Home />
      <Card pokename="Pikachu" pokenumber="25" pic="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"/>
    </div>
  );
}

export default App;
