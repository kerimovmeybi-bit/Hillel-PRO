function PlanetCard({ name, climate, population, terrain }) {
  return (
    <div className="col-md-4 mb-4">

      <div className="card planet-card">

        <div className="card-body">

          <h5 className="card-title text-warning">
            {name}
          </h5>
         
          <p>
            <strong>Climate:</strong> {climate}
          </p>

          <p>
            <strong>Population:</strong> {population}
          </p>

          <p>
            <strong>Terrain:</strong> {terrain}
          </p>
          <button className="btn btn-outline-warning btn-sm mt-2">
            Details
          </button>

        </div>

      </div>

    </div>
  );
}


export default PlanetCard;