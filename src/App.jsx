import { ProductsProvider } from './Context/ProductContext';
import FatherComponent from './Components/FatherComponent';

function App() {
  return (
    <ProductsProvider>
      <FatherComponent />
    </ProductsProvider>
  );
}

export default App;
