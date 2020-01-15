import React from 'react';
import ProductList from "./pages/ProductList";
import CartList from "./pages/CartList";
import "./global.css"
import { Provider } from "react-redux";
import store from "./store";
import { Switch, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/">
            <ProductList />
          </Route>
          <Route exact={true} path="/cart">
            <CartList />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
