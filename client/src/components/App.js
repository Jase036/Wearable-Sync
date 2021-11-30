import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//styling
import Globalstyles from "./Globalstyles";

//children
import Home from "./HomePage/Home";
<<<<<<< Updated upstream
import About from "./About";
=======
import ShoppingCart from "./shoppingCart/ShoppingCart";

>>>>>>> Stashed changes




function App() {
  return (
      <>
        <BrowserRouter>
          <Globalstyles/>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
<<<<<<< Updated upstream
              <Route path="/about">
                <About />
              </Route>
=======
              <Route exact path="/shoppingCart">
                <ShoppingCart />
              </Route>
            
>>>>>>> Stashed changes
            </Switch>
            </BrowserRouter>
    
      </>
  );
}

export default App;
