import { useState } from 'react';

const useProductState = () => {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  return { filterText, setFilterText, inStockOnly, setInStockOnly };
};

export default useProductState;
