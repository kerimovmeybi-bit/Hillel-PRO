import './App.css';

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import PlanetList from "./components/PlanetList";

function App() {
  return (
    <div className="overlay">

      <Header />

      <SearchBar />

      <PlanetList />

    </div>
  );
}

export default App;