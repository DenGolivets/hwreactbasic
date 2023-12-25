import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Link } from "react-router-dom";
import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites } from '../../store/FavoritesSlice';
import { removeFromFavorites } from '../../store/FavoritesSlice';
import './singleCard.css';


export default function SingleCard({
    id,
    name, 
    image,
    premiered,
}) {

    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites.movies);
    const isFavorite = favorites.some((movie) => movie.id === id);
    
    const handleAddToFavorites = () => {
        if (isFavorite) {
            dispatch(removeFromFavorites({ id }));
        } else {
            dispatch(addToFavorites({
                id,
                name,
                image,
                premiered,
            }));
        }
    };

    return (
        <div className='homemain'>
    <Card 
        sx={{ 
        marginTop: "40px",
        height: "370px", 
        width: "260px",
        marginBottom: '20px',
        }}
        className="card"
        >
            <div className='mediamain'>
        <CardMedia
            image={image}
            component="img"
            sx={{ 
                objectFit: "cover",
                height: "370px", 
                width: "260px",
                position: "relative",

            }}
            className="cardMedia"
        />
        </div>
        <div className='Absol'>
        <Link
            to={`/show/${id}`}
            className="btn"
        >  
            Show More
        </Link>
        <div className='mainfavorite'>
        <IconButton onClick={handleAddToFavorites} 
        className='iconbutton'
        style={{
            color: isFavorite ? 'red' : 'black',
            background: 'rgba(0, 0, 0, 0.1)',
            transition: 'background 0.3s'
        }}
        >
            <FavoriteIcon className='favoriteIcon' style={{
            color: isFavorite ? 'red' : 'black',
        }} />
        </IconButton>
        </div>
        </div>
    {/* </CardActionArea> */}
    </Card>
    </div>
  );
}
