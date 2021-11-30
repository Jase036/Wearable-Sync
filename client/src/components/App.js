import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//styling
import Globalstyles from "./Globalstyles";

//children
import Home from "./HomePage/Home";
import Footer from "./Footer";

import CatalogRender from './CatalogRender';




function App() {
  return (
      <>
    <BrowserRouter>
      <Globalstyles/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
    <BrowserRouter>
      <Globalstyles/>
        
  <CatalogRender></CatalogRender>
        <Footer />;
        </BrowserRouter>
    
          {/* add more here */}
        </Switch>
    </BrowserRouter>
      </>
  );
}

export default App;
