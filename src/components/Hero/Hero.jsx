import React from "react";
import Header from "../Header/Header";
import './Hero.css';
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";

import {motion} from 'framer-motion';

const Hero = () => {
    const spring = {
        type: "spring",
        damping: 15,
        stiffness: 100,
        delay: 0.5
    }
    const tween = {
        type: "tween",
        duration: 1.5,
    }
    const mobile = window.innerWidth <= 768 ? true : false;
    return (
        <div className="hero" id="home">
            <div className="blur hero-blur"></div>
            <div className="left-h">
                <Header/>
{/* The best ad                 */}
                <div className="the-best-ad">
                    <motion.div
                        initial={{ left: mobile? '178px':'242px' }}
                        whileInView={{ left: '8px' }}
                        transition={spring}
                    >
                    </motion.div>
                    <span>The best fitness club in the town</span>
                </div>
{/* Hero Heading                 */}
                <div className="hero-text">
                    <div>
                        <span className="stroke-text">Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal body</span>
                    </div>
                    <div>
                        <span>
                             In here we will help you to shape and build your ideal body and live up your life to fullest
                        </span>
                    </div>
                </div>
{/* Figures                 */}
                <div className="figures">
                    <div>
                        <span>+140</span>
                        <span>expert coachs</span>
                    </div>
                    <div>
                        <span>+978</span>
                        <span>members joined</span>
                    </div>
                    <div>
                        <span>+50</span>
                        <span>fitness programs</span>
                    </div>                    
                </div>
{/* Hero buttons                 */}
                <div className="hero-buttons">
                    <button className="btn">Get Started</button>
                    <button className="btn">Learn More</button>
                </div>
            </div>
{/* // Coté droit de la page             */}
            <div className="right-h">
                <button className="btn">Join Now</button>
                <motion.div className="heart-rate"
                    initial={{ right: "-1rem" }}
                    whileInView={{ right: "4rem"}}
                    transition={spring}
                >
                    <img src={Heart} alt="" />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </motion.div>
{/* Hero images                 */}
                <img src={hero_image} alt="" className="hero-image"/>
                <motion.img
                     initial={{ right: "11rem" }}
                     whileInView={{ right: "20rem"}}
                     transition={tween}
                src={hero_image_back} alt="" className="hero-image-back"/>
{/* Calories                 */}
                <motion.div className="calories"
                    initial={{ right: "37rem" }}
                    whileInView={{ right: "28rem"}}
                    transition={tween}
                >
                    <img src={Calories} alt="" />
                    <div>
                        <span>Calories&nbsp;Burned</span>
                        <span>220 Kcal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    )
};

export default Hero;