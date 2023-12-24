import Navigation from "../components/Navigation/Navigation";
import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import { Outlet, useLocation } from "react-router-dom";
import Footer from '../components/Footer/Footer'
import TitleSingleSlide from "../components/TitleSingleSlide/TitleSingleSlide";
import HeaderSlider from "../components/HeaderSlider/HeaderSlider";



function Main () {
    const location = useLocation();
    const visiblePaths = ['/tvshows', '/home', '/favorites'];

    const mainContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        height: location.pathname === '/' ? '100vh' : 'auto',
        minHeight: '100vh',
    };

    useEffect(() => {
        const scrollToTop = () => {
        window.scrollTo(0, 0);
        };
        scrollToTop();
        window.addEventListener('beforeunload', scrollToTop);
        return () => {
        window.removeEventListener('beforeunload', scrollToTop);
        };
    }, []);

    return (
        <div className="App" style={mainContainerStyle}>
            {visiblePaths.includes(location.pathname) && <HeaderSlider />}
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