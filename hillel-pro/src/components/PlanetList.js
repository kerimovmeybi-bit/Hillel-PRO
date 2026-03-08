import PlanetCard from "./PlanetCard";

function PlanetList() {

  const planets = [
    {
      name: "Tatooine",
      climate: "Arid",
      population: "200000",
      terrain: "Desert"
    },
    {
      name: "Naboo",
      climate: "Temperate",
      population: "4500000000",
      terrain: "Grassy hills"
    },
    {
      name: "Hoth",
      climate: "Frozen",
      population: "Unknown",
      terrain: "Ice"
    },
    {
      name: "Endor",
      climate: "Temperate",
      population: "30000000",
      terrain: "Forests"
    },
    {
      name: "Alderaan",
      climate: "Temperate",
      population: "2000000000",
      terrain: "Mountains"
    },
    {
      name: "Dagobah",
      climate: "Murky",
      population: "Unknown",
      terrain: "Swamp"
    }
  ];

  return (
    <div className="container">

      <div className="row">

        {planets.map((planet, index) => (
          <PlanetCard
            key={index}
            name={planet.name}
            climate={planet.climate}
            population={planet.population}
            terrain={planet.terrain}
          />
        ))}

      </div>

    </div>
  );
}

export default PlanetList;