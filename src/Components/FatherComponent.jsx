import Search from './Search';
import Table from './Table';
import { useProducts } from '../Context/ProductContext';

const FatherComponent = () => {
  const { Products, filterText, setFilterText, inStockOnly, setInStockOnly } =
    useProducts();
  return (
    <div className="container border rounded p-5 mt-5">
      <div className="row">
        <div className="col">
          <Search
            filterText={filterText}
            inStockOnly={inStockOnly}
            onFilterTextChange={setFilterText}
            onInStockOnlyChange={setInStockOnly}
          />

          <Table
            Products={Products}
            filterText={filterText}
            inStockOnly={inStockOnly}
          />
        </div>
      </div>
    </div>
  );
};

export default FatherComponent;
