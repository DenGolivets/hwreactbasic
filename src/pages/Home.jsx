import { useEffect, useState, useRef } from "react";
import useRequest from "../hooks/useRequest";
import Grid from "@mui/material/Grid";
import SingleCard from "../components/SingleCard/SingleCard";
import { useDispatch, useSelector } from "react-redux";
import { action, setSearch } from "../store/SearchSlice";
import { DEFAULT_IMAGE } from "../constans/constans";
import './home.css'

function Home() {
    const [setSelectedFilm] = useState(null);
    const apiSearch = useSelector((state) => state.search.search);
    const searchRef = useRef("");
    const dispatch = useDispatch();
    const apiData = useRequest(apiSearch);

    useEffect (() => {
        searchRef.current.focus();
    }, [])
    
    const handleCardClick = (id) => {
        setSelectedFilm(id)
    };
    
    const handleSearch = (e) => {
        dispatch(setSearch(e.target.value));
    }
        return (
            <>
            <div style={{
                width: '100%',
                minHeight: '100vh',
                height: '100%'
            }}>
            <Grid container pt={5}
            sx={{
                display: 'flex',
                justifyContent: 'center',
            }}        
            >
            <input type='text' style={{
                color: '#fff',
                backgroundColor: 'rgba(209,208,207,.6)',
                height: '30px',
                border: 'none',
                marginLeft: '50px',
              }}
              value={apiSearch} onChange={handleSearch} ref={searchRef} />
              </Grid>
              <Grid container spacing={2} sx={{ padding: "20px" }}>
              {apiData?.map(({ id, name, image }, index) => (
              <Grid item xs={3} key={index}>
              <SingleCard
              id={id}
              name={name}
              image={image ? image.medium || DEFAULT_IMAGE : DEFAULT_IMAGE}
              onClick={handleCardClick}
              />
              </Grid>
              ))}
              </Grid>
              </div>
              </>
        );
        }
    
    export default Home;
