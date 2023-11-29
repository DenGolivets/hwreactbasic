import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { DEFAULT_IMAGE } from '../../constans/constans'
import { Link, useParams } from "react-router-dom";


import './singleCard.css';
import { style, width } from '@mui/system';

export default function SingleCard({
    id,
    name, 
    image = DEFAULT_IMAGE,
    time,
}) {
    const handleClick = (title) => {
        console.log(`${title} clicked!`);
    }
    return (
    <Card sx={{ 
        marginTop: "100px",
        maxWidth: 345,
        }}
        className="card"
        >
    <CardActionArea>
        <CardMedia
            image={image}
            sx={{ 
                height: "222px", 
                width: "395px",
            }}
            className="cardMedia"
        />
        <div className='Absol'>
            <p className='name'>{name}</p>
            <p className='time'>{time}</p>
        <Link
            to={`/tvshows/${id}`}
            className="btn"
        >  
            Show More
        </Link>
        </div>
    </CardActionArea>
    </Card>
  );
}