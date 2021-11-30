
import CatalogRender from './CatalogRender';
import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Globalstyles from "./Globalstyles";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
function App() {
  const [bacon, setBacon] = useState(null);

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
  );
}

export default App;
