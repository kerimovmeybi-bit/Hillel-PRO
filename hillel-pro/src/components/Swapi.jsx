import { useDispatch, useSelector } from "react-redux";
import { fetchPerson } from "../redux/swapi/swapiSlice";

export default function Swapi() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.swapi);

  return (
    <div>
      <button onClick={() => dispatch(fetchPerson(1))}>
        Get Luke
      </button>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {data && (
        <div>
          <h3>{data.name}</h3>
          <p>Height: {data.height}</p>
          <p>Mass: {data.mass}</p>
        </div>
      )}
    </div>
  );
}