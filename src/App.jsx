import React from 'react';
import { Route } from 'react-router-dom';
import { data } from './data';
import ProductContextProvider from './contexts/ProductContext.jsx';
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import CartContextProvider from './contexts/CartContext.jsx';
function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <CartContextProvider>
          <Navigation />
          <main className="content">
            <Route exact path="/">
              <Products />
            </Route>
            <Route path="/cart">
              <ShoppingCart />
            </Route>
          </main>
        </CartContextProvider>
      </ProductContextProvider>
    </div>
  );
}

export default App;
