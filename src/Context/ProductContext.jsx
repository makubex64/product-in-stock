import { createContext, useContext, useState } from 'react';
import Products from '../Data/Data';
import useProductState from '../Hooks/useProductState';

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const { filterText, setFilterText, inStockOnly, setInStockOnly } =
    useProductState();

  return (
    <ProductsContext.Provider
      value={{
        Products,
        filterText,
        setFilterText,
        inStockOnly,
        setInStockOnly,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  return useContext(ProductsContext);
};
