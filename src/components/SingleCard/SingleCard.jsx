import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import { Link } from "react-router-dom";
import './singleCard.css';


export default function SingleCard({
    id,
    name, 
    image,
    premiered,
}) {
    return (
    <Card 
        sx={{ 
        marginTop: "40px",
        height: "370px", 
        width: "260px",
        marginBottom: '20px'
        }}
        className="card"
        >
    <CardActionArea>
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
        <div className='Absol'>
            <p className='name'>{name}</p>
            <p className='time'>{premiered}</p>
        <Link
            to={`/show/${id}`}
            className="btn"
        >  
            Show More
        </Link>
        </div>
    </CardActionArea>
    </Card>
  );
}