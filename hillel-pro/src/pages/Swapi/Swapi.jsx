import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPeopleRequest } from "../../redux/slices/swapiSlice";

export default function Swapi() {
  const dispatch = useDispatch();
  const { people } = useSelector((state) => state.swapi);

  useEffect(() => {
    dispatch(fetchPeopleRequest());
  }, []);

  return (
    <div>
      {people.map((p) => (
        <div key={p.name}>{p.name}</div>
      ))}
    </div>
  );
}