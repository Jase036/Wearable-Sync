import React from "react";
import Header from "./Header";
import CatalogRender from "./CatalogRender";
import Footer from "./Footer";
import SearchError from "./Navbar/SearchError";

//styling

const Search = () => {
  return (
    <div>
      <Header />
      <CatalogRender />
      <Footer />
    </div>
  );
};

export default Search;
