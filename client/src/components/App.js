import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//styling
import Globalstyles from "./Globalstyles";

//children
import Home from "./HomePage/Home";
import About from "./About";
import ShoppingCart from "./shoppingCart/ShoppingCart";
import ItemDetails from './ItemDetails'
import CheckOutForm from "./shoppingCart/CheckoutForm";





function App() {
  return (
      <>
        <BrowserRouter>
          <Globalstyles/>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/item/:_id">
                <ItemDetails />
              </Route>
              <Route exact path="/checkout">
                <CheckOutForm />
              </Route>
            
            </Switch>
            </BrowserRouter>
    
      </>
  );
}

export default App;
