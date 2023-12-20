import styled from '@emotion/styled';
import CardMedia from '@mui/material/CardMedia';

export const slideMediaStyles = {
    maxWidth: '100%',
    height: '100vh',
    
};

export const containerStyles = {
    display: "flex",
    background: `
    linear-gradient(
        90deg, 
        rgba(0, 0, 0, 1) 0%,  
        rgba(20, 20, 20, 0.60) 50%,  
        rgba(83, 100, 141, 0.00) 100%
    )
    `,
};

export const imageContainerStyles = {
    flex: 1,
};

export const infoContainerStyles = {
    flex: 1,
    position: "relative",
    backgroundColor: "black",
    overflow: "hidden",
    background: `
    linear-gradient(
        to right, 
        rgba(0, 0, 0, 0.6) 0%, 
        rgba(0, 0, 0, 0.6) 5%, 
        rgba(0, 0, 0, 0) 10%, 
        rgba(0, 0, 0, 0) 90%, 
        rgba(0, 0, 0, 0) 95%,
        rgba(0, 0, 0, 0.9) 98%, 
        rgba(0, 0, 0, 0.8) 100%
    )
    `,
};

export const overlayStyles = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",

};
export const darkOverlayStyles = {
    content: '""',
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "relative",
    width: "100%", 
    height: "100%",
    background: "radial-gradient(at right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 90%)",
};

export const commonStyles = {
    position: "absolute",
    bottom: "10px",
    left: "30px",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    bottom: "4.5rem",
    marginLeft: '5rem'
};

export const largeScreenStyles = {
    bottom: "25rem",
};

export const linkStyles = {
    width: '120px',
    height: '40px',
    marginTop: '200px',
    border: '1px solid #E50914',
    background: '#E50914',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    overflow: 'hidden',
    WebkitTextFillColor: 'white',
    boxShadow: '0 0px 20px #ffffff50',
    marginBottom: '40px'  
};

export const StyledCardMedia = styled(CardMedia)`
object-fit: cover;
object-position: 50% 40%;
box-shadow: 0 8px 38px rgba(228, 3, 3, 0.8);
position: relative;
animation: ${({ isSecondSlide }) => (isSecondSlide ? 'glowAnimation2' : 'glowAnimation1')} 3s infinite alternate;

@keyframes glowAnimation1 {
  0% {
    box-shadow: 0 8px 38px rgba(228, 3, 3, 0.4);
  }
  50% {
    box-shadow: 0 8px 38px rgb(240, 2, 2);
  }
  100% {
    box-shadow: 0 8px 38px rgba(228, 3, 3, 0.4);
  }
}

@keyframes glowAnimation2 {
  0% {
    box-shadow: 0 8px 38px rgba(248, 152, 62, 0.5);
  }
  50% {
    box-shadow: 0 8px 38px rgb(248, 152, 62);
  }
  100% {
    box-shadow: 0 8px 38px rgba(248, 152, 62, 0.5);
  }
}
@keyframes glowAnimation3 {
  0% {
    box-shadow: 0 8px 38px rgba(62, 248, 245, 0.5);
  }
  50% {
    box-shadow: 0 8px 38px rgb(62, 248, 245);
  }
  100% {
    box-shadow: 0 8px 38px rgba(62, 248, 245, 0.5);
  }
}
@keyframes glowAnimation4 {
  0% {
    box-shadow: 0 8px 38px rgba(228, 3, 3, 0.5);
  }
  50% {
    box-shadow: 0 8px 38px rgb(240, 2, 2);
  }
  100% {
    box-shadow: 0 8px 38px rgba(228, 3, 3, 0.5);
  }
}
@keyframes glowAnimation5 {
  0% {
    box-shadow: 0 8px 38px rgba(158, 248, 62, 0.5);
  }
  50% {
    box-shadow: 0 8px 38px rgb(158, 248, 62);
  }
  100% {
    box-shadow: 0 8px 38px rgba(158, 248, 62, 0.5);
  }
}
@keyframes glowAnimation6 {
  0% {
    box-shadow: 0 8px 38px rgba(245, 62, 248, 0.5);
  }
  50% {
    box-shadow: 0 8px 38px rgb(245, 62, 248);
  }
  100% {
    box-shadow: 0 8px 38px rgba(245, 62, 248, 0.5);
  }
}
@keyframes glowAnimation7 {
  0% {
    box-shadow: 0 8px 38px rgba(228, 3, 3, 0.4);
  }
  50% {
    box-shadow: 0 8px 38px rgb(240, 2, 2);
  }
  100% {
    box-shadow: 0 8px 38px rgba(228, 3, 3, 0.4);
  }
}
@keyframes glowAnimation8 {
  0% {
    box-shadow: 0 8px 38px rgba(248, 245, 62, 0.4);
  }
  50% {
    box-shadow: 0 8px 38px rgb(248, 245, 62);
  }
  100% {
    box-shadow: 0 8px 38px rgba(248, 245, 62, 0.4);
  }
}
`;