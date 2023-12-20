import Navigation from "../components/Navigation/Navigation";
import React from "react";
import Grid from "@mui/material/Grid";
import { Outlet, useLocation } from "react-router-dom";
import Footer from '../components/Footer/Footer'
import TitleSingleSlide from "../components/TitleSingleSlide/TitleSingleSlide";


function Main () {
    const location = useLocation();

    const mainContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        height: location.pathname === '/' ? '100vh' : 'auto',
        minHeight: '100vh',
    };

    return (
        <div className="App" style={mainContainerStyle}>
 
            <Navigation/>
            <Grid container style={{ flex: 1 }}>
                <Outlet/>
            </Grid>
            {location.pathname === "/" && <TitleSingleSlide />}
            {location.pathname !== "/" && <Footer />}
        </div>
    )
}

export default Main;