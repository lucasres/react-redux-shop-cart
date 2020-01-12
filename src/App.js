import React from 'react';
import ProductList from "./pages/ProductList";
import "./global.css"
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <ProductList />
    </Provider>
  );
}

export default App;
