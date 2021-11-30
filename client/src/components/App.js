import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//styling
import Globalstyles from "./Globalstyles";

//children
import Home from "./HomePage/Home";
import About from "./About";
import ShoppingCart from "./shoppingCart/ShoppingCart";





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
              <Route exact path="/shoppingCart">
                <ShoppingCart />
              </Route>
            
            </Switch>
            </BrowserRouter>
    
      </>
  );
}

export default App;
