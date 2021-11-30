import React from "react";
import Header from "../Header";
import CatalogRender from "../CatalogRender";
import Footer from "../Footer";



//children
import Banner from "./Banner";

//styling
import styled from "styled-components";


const Home = () =>{
return(
    <>
        <Header />
        <Banner/>
        <CatalogRender />
        <Footer />
    </>


)



}

export default Home;