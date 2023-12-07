import React, { useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import Rating from "@mui/material/Rating";
import WebFont from 'webfontloader';
import './singleItemTabs.css';

const theme = createTheme({
    palette: {
        primary: {
        main: red[500],
    },
        secondary: {
        main: red[500],
    },
    },
});

function CustomTab({ value, index, children }) {

    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Abel', 'Roboto', 'Bungee Spice', 'Staatliches'], 
        },
        });
    }, []);

    return (
    <div
        role="tabpanel"
        hidden={value !== index}
        id={`film-tabpanel-${index}`}
        aria-labelledby={`film-tab-${index}`}
        style={{ overflowY: "auto", paddingRight: '30px', paddingLeft: '30px' }}
    >
      {value === index && (
        <div
          style={{
            maxHeight: "300px",
            backgroundColor: "#282B2F",
            overflowY: "auto",
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}

function SingleItemTabs({ activeTab, handleChangeTab, summary, series }) {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Box
          sx={{
            borderColor: "divider",
            margin: "1rem auto",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Tabs
            value={activeTab}
            onChange={handleChangeTab}
            aria-label="film-details-tabs"
            indicatorColor="secondary"
          >
            <Tab label="Description" sx={{ 
                color: "white", 
                backgroundColor: activeTab === 0 ? "#222527" : "transparent",
                width: "150px", 
                height: "80px",
                }} 
                />
            <Tab label="Series" sx={{ 
                color: "white",
                backgroundColor: activeTab === 1 ? "#222527" : "transparent",
                width: "150px", 
                height: "80px",
                }} 
                />
          </Tabs>
        </Box>
        <div
          style={{
            width: "100%",
          }}
        >
          <CustomTab value={activeTab} index={0}>
            <div
              dangerouslySetInnerHTML={{ __html: summary }}
              style={{
                color: "white",
                height: "200px",
                overflow: "auto",
                paddingLeft: '40px',
                paddingRight: '40px',
                backgroundColor: '#191919',
                border: '2px solid #282B2F', 
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.6)',
                borderRadius: '10px' 
              }}
            />
          </CustomTab>
        </div>
        <div
          style={{
            borderBottom: "none",
            width: "100%",
            marginBottom: "2rem",
            boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
          }}
        >
        <CustomTab value={activeTab} index={1}>
            <table
              style={{
                color: "white",
                width: "100%",
                height: "200px",
                overflow: "auto",
                borderSpacing: "1px",
                borderBottom: 'none',
              }}
            >
              <thead>
                <tr
                  style={{
                    textAlign: "left",
                    color: "white",
                    fontSize: "25px",
                    backgroundColor: "rgb(40, 43,47)",
                    height: "3.5rem",
                    fontFamily: 'Staatliches',
                    fontSize: '28px',
                    boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.20), 0px 1px 10px 0px rgba(0,0,0,0.25)",
                  }}
                >

                  <th style={{ textAlign: "left", paddingLeft: '15px' }}><span
                        className="Th_text"
                    >
                    Episode</span></th>
                  <th style={{ textAlign: "center" }}><span
                        className="Th_text"
                    >Airdate</span></th>
                  <th style={{ textAlign: "center" }}><span
                        className="Th_text"
                    >Raiting</span></th>
                </tr>
              </thead>
              <tbody>
                {series && series.map(({ name, id, season, number, airdate, rating }) => (
                  <tr
                    key={id}
                    style={{
                      margin: "1rem",
                      borderBottom: "1px solid white",
                    }}
                  >
                    <td
                      style={{
                        margin: "1rem",
                        backgroundColor: "rgb(25, 25, 25)",
                        height: "2rem",
                        paddingLeft: '15px'
                      }}
                    >
                      {name} (Season {season}, Episode
                      {number})
                    </td>
                    <td
                      style={{
                        margin: "1rem",
                        backgroundColor: "rgb(25, 25, 25)",
                        textAlign: "center",
                      }}
                    >
                      {airdate}
                    </td>
                    <td
                      style={{
                        margin: "1rem",
                        backgroundColor: "rgb(25, 25, 25)",
                        textAlign: "center",
                      }}
                    >
                      <Rating
                        name={`rating-${id}`}
                        value={rating.average}
                        max={10}
                        size="small"
                        readOnly
                        style={{ color: "red" }}
                      />
                      {rating.average}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CustomTab>
        </div>
      </>
    </ThemeProvider>
  );
}

export default SingleItemTabs;