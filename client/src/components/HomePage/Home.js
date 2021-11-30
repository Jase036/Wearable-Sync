import React from "react";
import CatalogRender from "../CatalogRender";
import Footer from "../Footer";



//children
import Banner from "./Banner";

//styling
import styled from "styled-components";


const Home = () =>{
return(
    <>
        <Banner/>
        <CatalogRender />
        <Footer />
    </>


)



}

export default Home;