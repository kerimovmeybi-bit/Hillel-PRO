function SearchBar() {
  return (
    <div className="container mb-5">

      <div className="input-group">

        <input
          type="text"
          className="form-control"
          placeholder="Search planet..."
        />

        <button className="btn btn-warning">
          Search
        </button>

      </div>

    </div>
  );
}

export default SearchBar;