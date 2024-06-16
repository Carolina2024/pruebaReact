import "bootstrap/dist/css/bootstrap.min.css";

function Buscador({ query, setQuery }) {
  return (
    <div className="my-4">
      <input
        type="text"
        placeholder="Buscar por nombre del libro en español"
        className="form-control border border-3 border-dark"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}

export default Buscador;
