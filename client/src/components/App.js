<<<<<<< Updated upstream
=======
import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//styling
import Globalstyles from "./Globalstyles";

//children
import Home from "./HomePage/Home";
>>>>>>> Stashed changes

import CatalogRender from './CatalogRender';
import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Globalstyles from "./Globalstyles";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
      <Globalstyles/>
      <>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

<<<<<<< Updated upstream
  useEffect(() => {
    fetch("/bacon")
      .then((res) => res.json())
      .then((data) => setBacon(data));
  }, []);

  return( <>
    <BrowserRouter>
      <Globalstyles/>
        <div>{bacon ? bacon : `...where's my stuff?...`}</div>;
  <CatalogRender></CatalogRender>
        <Footer />;
        </BrowserRouter>
    </>
=======
          {/* add more here */}
        </Switch>
      </>
    </BrowserRouter>
>>>>>>> Stashed changes
  );
}

export default App;
