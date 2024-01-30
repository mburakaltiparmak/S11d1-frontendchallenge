import { createContext, useContext, useState } from 'react';
import { data } from '../data.js';
const ProductContext = createContext();
export const useProducts = () => useContext(ProductContext);
const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState(data);
  
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};
export default ProductContextProvider;
