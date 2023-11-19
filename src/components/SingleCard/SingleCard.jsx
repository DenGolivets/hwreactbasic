import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import { DEFAULT_IMAGE } from '../../constans/constans'
// import Button from '@mui/material/Button';



import '../../SingleCard.css'




export default function SingleCard({
    id,
    name, 
    image = DEFAULT_IMAGE,
    time,
}) {
    const handleClick = (id) => {
        console.log(id);
    }
    return (
    <Card sx={{ 
        marginTop: "100px",
        maxWidth: 345,
        // "& :hover": {
        // backgroundColor: "yellow",
        // }
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
            <Button 
            onClick={() => handleClick(id)}
            // variant="contained"
            disableElevation
            style={{ border: "1px solid #E50914", background: "#E50914", color: "#fff" }}
            className="btn"
            >
            Show More
            </Button>
            </div>
      </CardActionArea>
    </Card>
  );
}