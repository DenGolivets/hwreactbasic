import React, { useEffect } from "react";
import { Dialog, DialogContent, DialogActions, Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { DEFAULT_ACTOR_IMAGE } from "../../constans/constans";
import { keyframes, styled } from "@mui/system";
import { motion } from "framer-motion";
import useReqActor from "../../hooks/useReqActor";
import WebFont from 'webfontloader';
import './actorItem.css'


const pulse  = keyframes`
0% {
        box-shadow: 0px 0px 20px 10px rgba(255, 0, 0, 0.5);
}
    50% {
        box-shadow: 0px 0px 20px 10px rgba(255, 0, 0, 0.2);
    }
    100% {
        box-shadow: 0px 0px 20px 10px rgba(255, 0, 0, 0.5);
    }
}
`;

const ActorModal = ({ actor, open, onClose, characterNames }) => {
    const { actorData, loading, error } = useReqActor();

    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Abel', 'Roboto', 'Staatliches'], 
          },
        });
      }, []);

  return (
    <Dialog 
    open={open} 
    onClose={onClose}
    PaperProps={{
        sx: {
            width: "40vw", 
            borderRadius: '10px',
            height: "70vh", 
            maxWidth: "none", 
            backgroundColor: '#191919',
            boxShadow: "none",
            boxShadow: "0px 0px 20px 10px rgba(255, 0, 0, 0.5)",
            animation: `${pulse} 5.5s infinite`,
        },
    }}
    component={motion.div}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0, scale: 0.9,  }}
    transition={{ duration: 0.6, delay: 0.2 }}
    >
      <DialogContent>
        <Card
        sx={{
            width: "100%",  
            height: "100%", 
            display: "flex",
            flexDirection: "column",
            overflow: 'hidden',
            boxShadow: "none",
            backgroundColor: '#191919'
          }}
        >
        <motion.div
            style={{
              height: '400px',
              width: '290px',
              margin: 'auto',
              overflow: 'hidden',
              borderRadius: '10px',
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
        >
          <CardMedia
            component="img"
            src={actor.person.image ? actor.person.image.medium || DEFAULT_ACTOR_IMAGE : DEFAULT_ACTOR_IMAGE}
            alt={actor.person.name}
            style={{
            //   height: '300px',  
            //   width: '250px',  
            width: "100%",
            height: "100%",
              objectFit: 'cover',  
            //   margin: 'auto', 
            }}
          />
          </motion.div>
          <CardContent
          sx={{
            flex: "1 1 auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: '40px',
            gap: "10px"
          }}
          >
            <Typography variant="h6"
            style={{
                color: 'white',
                fontFamily: 'Staatliches',
                fontSize: '30px'
            }}
            >
                {actor.person.name}
            </Typography>
            <Typography variant="body2" color="text.secondary"
            style={{
                color: '#FF0C00',
                fontWeight: 'bold',
            }}
            >
                {actor.person.birthday}
            </Typography>
            <Typography variant="body2" color="text.secondary"
            style={{
                color: 'white',
                fontSize: '16px',
                fontWeight: 'bold',
                // marginBottom: '10px'
            }}
            >
                {actor.person.country && actor.person.country.name}
            </Typography>
            <Typography variant="body2" color="text.secondary"
            style={{
                color: 'white'
            }}
            >
                As: {characterNames}</Typography>
          </CardContent>
        </Card>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary" style={{ color: '#FF0C00', fontWeight: 'bold' }}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ActorModal;