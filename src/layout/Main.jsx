import Navigation from "../components/Navigation/Navigation";
import React from "react";
import Grid from "@mui/material/Grid";
import { Outlet, useLocation } from "react-router-dom";
import Footer from '../components/Footer/Footer'
import TitleSingleSlide from "../components/TitleSingleSlide/TitleSingleSlide";


function Main () {
    const location = useLocation();
    return (
        <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
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