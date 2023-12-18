import { Grid } from "@mui/material";
import SingleCard from '../components/SingleCard/SingleCard'
import useReqGenre from "../hooks/useReqGenre";
import { useParams } from "react-router-dom";


function ShowsByGenre () {
    const { genres } = useParams();
    const genresFilms = useReqGenre(`https://dolphin-app-pc6ii.ondigitalocean.app/article/byGenre/${genres}`);
    
    return(
        <Grid container sx={{marginTop:'20px'}}>
            <h2 style={{textTransform:'uppercase', margin:'auto', color: 'red'}}>Genres: {genres}</h2> 
            
            <Grid container sx={{display:'flex', alignContent:"center", alignItems:"center", justifyContent:"center"}}>
                {genresFilms.map((show, index) =>  (
                    <Grid conteiner key={index}>
                        <SingleCard
                        id={show.id} 
                        name={show.name} 
                        image={show.image.medium}>   
                        </SingleCard>
                </Grid>
                ))}
            </Grid> 
        </Grid>
    )
}

export default ShowsByGenre;