import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//styling
import Globalstyles from "./Globalstyles";

//children
import Home from "./HomePage/Home";





function App() {
  return (
      <>
        <BrowserRouter>
          <Globalstyles/>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>

        
            </Switch>
            </BrowserRouter>
    
      </>
  );
}

export default App;
