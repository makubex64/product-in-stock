import { useProducts } from '../Context/ProductContext';
import CategoryRow from './CategoryRow';
import ProductRow from './ProductRow';

const Table = ({ Products, filterText, inStockOnly }) => {
  const rows = [];
  let lastCategory = null;

  Products.forEach((product) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }

    if (inStockOnly && !product.stocked) {
      return;
    }

    if (product.category !== lastCategory) {
      rows.push(
        <CategoryRow key={product.category} category={product.category} />
      );
    }

    rows.push(<ProductRow key={product.name} product={product} />);

    lastCategory = product.category;
  });

  return (
    <table className="table ">
      <thead>
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Precio</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default Table;
