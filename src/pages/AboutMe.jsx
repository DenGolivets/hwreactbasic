import React,{ useEffect, useState, useRef } from "react";
import './aboutMe.css';
import MyLogo from '../img/My Logo 2.jpg';
import WebFont from 'webfontloader';
import BrushIcon from '@mui/icons-material/Brush';
import IntegrationInstructionsRoundedIcon from '@mui/icons-material/IntegrationInstructionsRounded';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import Reacticon from '../img/Reacticon.png'
import { motion } from "framer-motion";

function AboutMe() {

    const [showDescription, setShowDescription] = useState(false);
    const [labelActive, setLabelActive] = useState(false);
    const aboutDescriptionRef = useRef(null);
    const aboutContainerRef = useRef(null);

    const toggleDescription = () => {
        setShowDescription(!showDescription);
        setLabelActive(!labelActive);

        if (showDescription) {
            if (aboutContainerRef.current) {
                aboutContainerRef.current.scrollIntoView({
                    behavior: "smooth",
                });
            }
        } else {
            if (aboutDescriptionRef.current) {
                aboutDescriptionRef.current.scrollIntoView({
                    behavior: "smooth",
                });
            }
        }
    };

    useEffect(() => {
        WebFont.load({
            google: {
            families: ['Abel', 'Roboto', 'Staatliches', 'Montserrat'], 
        },
        });
    }, []);
    
    return (
        <div className="about_main">
            <div ref={aboutContainerRef} className="about_container">
            
                <a href="#" className="about_photo">
                <nav class="social">
                <ul>
                    <li><a href="https://www.instagram.com/terra4beat/" target="a_blank">Instagram <i class="fa fa-instagram"></i></a></li>
                    <li><a href="https://www.facebook.com/den.golivets" target="a_blank">Facebook <i class="fa fa-facebook"></i></a></li>
                    <li><a href="https://soundcloud.com/terra4beat" target="a_blank">SoundCloud <i class="fa fa-soundcloud"></i></a></li>
                    <li><a href="https://github.com/DenGolivets?tab=repositories" target="a_blank">GitHub <i class="fa fa-github"></i></a></li>
                </ul>
            </nav>
                    <h1 style={{ fontFamily: 'Staatliches' }}>Den</h1>
                    <h1 className="Holivets" style={{ fontFamily: 'Staatliches' }}>Holivets</h1>
                    <img src={MyLogo} alt="mylogo2"/>
                    <div className="glow-wrap">
                    <i className="glow"></i>
                    </div>
                </a>
            </div>
            <div ref={aboutDescriptionRef} className="about_me_more">
                <label id="author" onClick={toggleDescription} style={{ color: labelActive ? 'red' : '#888' }}>
                    About me
                </label>
                {showDescription && (
    <div className="description_block">
                    <motion.div
                        initial={{ opacity: 0, y: 1000 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                    >
                    <div className="about_me_intro">
                        <h2>About Me</h2>
                        <p>Hello, my name is Denis Holivets. I'm a beginner front-end developer. 
                            I completed my first course with a professional teacher, during the course I learned layout (html, css, js) 
                            and also took a course on the modern React library. 
                            The site you are on is my first major project made in React. 
                            Thanks for the courses to Mikola Kipnyak.
                        </p>
                    </div>
                    </motion.div>
        <div className="description_row">
                    <motion.div
                        initial={{ opacity: 0, x: -1000 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.5, delay: 1 }}
                    >
            <div className="description_item">
                    
                <BrushIcon style={{ fontSize: '30px', color: 'red' }} />
                <div>
                    <h3>Web Design</h3>
                </div>
                    
            </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 1000 }}
                        animate={{ opacity: 1, x: -310 }}
                        transition={{ duration: 1.5, delay: 1 }}
                    > 
            <div className="description_item">
                    
                <AutoFixHighRoundedIcon style={{ fontSize: '30px', color: 'red' }} />
                <div>
                    <h3>Graphic Design</h3>
                </div>
                
            </div>  
                    </motion.div> 
        </div>
        
        <div className="description_row">
                    <motion.div
                        initial={{ opacity: 0, x: -1000 }}
                        animate={{ opacity: 1, x: 0}}
                        transition={{ duration: 1.5, delay: 1.3 }}
                    >
            <div className="description_item">
                <IntegrationInstructionsRoundedIcon style={{ fontSize: '30px', color: 'red' }} />
                <div>
                    <h3>Html, Css, Js</h3>
                </div>
            </div>
                    </motion.div> 
                    <motion.div
                        initial={{ opacity: 0, x: 1000 }}
                        animate={{ opacity: 1, x: -380}}
                        transition={{ duration: 1.5, delay: 1.3 }}
                    >
            <div className="description_item">
                <img src={Reacticon} alt="icon" style={{ fontSize: '30px', backgroundColor: 'red' }} />
                <div>
                    <h3>React</h3>
                </div>
            </div>
                    </motion.div>
        </div>
                <div className="links_sites">
                </div>
    </div>
                )}
            </div>
        </div>
    )
}

export default AboutMe;