import { styled, keyframes } from "@mui/system";
import { Card } from "@mui/material";
import { Button } from "@mui/material";

const blink = keyframes`
    0%, 100% {
    filter: drop-shadow(0px 0px 15px #FF0000);
    }
    50% {
    filter: drop-shadow(0px 0px 15px transparent);
    }
`;

const BlinkingCard = styled(Card)({
    boxSizing: "border-box",
    backgroundColor: "rgba(20, 20, 20)",
    display: "flex",
    alignItems: "center",
    width: "445px",
    minHeight: "200px",
    marginRight: "1rem",
    border: "none",
    boxShadow: "none",
    textDecoration: "none",
    color: "inherit",
    "&:hover": {
        filter: "drop-shadow(0px 0px 15px #FF0000)",
        animation: `${blink} 3.5s ease-in-out 3.5s infinite`,
        cursor: "pointer",
    },
    transition: "transform 0.5s ease",
});

const ButtonEffectRight = styled(Button)({
    position: "relative",
    overflow: "hidden",
    "&:after": {
        content: '""',
        position: "absolute",
        left: 0,
        bottom: 0,
        height: "600%",
        width: "140%",
        background: "#ffa300",
        transition: "all .5s ease-in-out",
        
        transform: "translateX(65%) translateY(13%) rotate(48deg)",
        WebkitTransform: "translateX(65%) translateY(13%) rotate(48deg)",
        WebkitTransition: "all .5s ease-in-out",
    },
    "&:hover:after": {
        transform: "translateX(65%) translateY(13%) rotate(45deg)",
        WebkitTransform: "translateX(-8%) translateY(13%) rotate(20deg)",
    },
});

const ButtonEffectLeft = styled(Button)({
    position: "relative",
    overflow: "hidden",
    "&:after": {
        content: '""',
        position: "absolute",
        left: 0,
        top: 0,
        height: "490%",
        width: "140%",
        background: "#ffa300",
        transition: "all .5s ease-in-out",
        transform: "translateX(-98%) translateY(-25%) rotate(45deg)",
        WebkitTransform: "translateX(-98%) translateY(-25%) rotate(45deg)",
        WebkitTransition: "all .5s ease-in-out",
    },
    "&:hover:after": {
        transform: "translateX(-9%) translateY(-25%) rotate(45deg)",
        WebkitTransform: "translateX(-9%) translateY(-25%) rotate(45deg)",
    },
});

export { BlinkingCard, ButtonEffectRight, ButtonEffectLeft }