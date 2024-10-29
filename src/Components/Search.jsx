import { useProducts } from '../Context/ProductContext';

const Search = ({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}) => {
  return (
    <>
      <div className="input-group mb-3">
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon1"
        >
          Button
        </button>
        <input
          value={filterText}
          onChange={(event) => onFilterTextChange(event.target.value)}
          type="text"
          className="form-control"
          placeholder="buscar productos..."
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
        />
      </div>
      <div className="form-check">
        <input
          checked={inStockOnly}
          onChange={(event) => onInStockOnlyChange(event.target.checked)}
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          Mostrar solo productos en stock
        </label>
      </div>
    </>
  );
};

export default Search;
