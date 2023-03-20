import React, { useState } from "react";
import "./Testimonials.css";
import {testimonialsData} from "../../data/testimonialsData";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";

import { motion } from "framer-motion";

const Testimonials = () => {
    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length;
    const tween = {
        type: "tween",
        duration: 2,
    }
    return (
        <div className="Testimonials" id="testimonials">
            <div className="left-t">
                <span>Testimonials</span>
                <span className="stroke-text">What they</span>
                <span>say about us</span>
                <motion.span
                    key={selected}
                    initial={{
                        opacity: 0,
                        x: -100
                    }}
                    animate={{
                        opacity: 1,
                        x: 0
                    }}
                    exit={{
                        opacity: 0,
                        x: 100
                    }}
                    transition={{...tween, duration:0.51}}
                >
                    {testimonialsData[selected].review}
                </motion.span>
                <span>
                    <span style={{color: 'var(--orange)'}}>
                    {testimonialsData[selected].name}&nbsp;
                    </span>
                    - {testimonialsData[selected].status}
                </span>
            </div>
            <div className="right-t">
                <motion.div
                    initial={{
                        opacity: 0,
                        x: -100
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0
                    }}
                    transition={tween}
                ></motion.div>
                <motion.div
                    initial={{
                        opacity: 0,
                        x: 100
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0
                    }}
                    transition={tween}
                ></motion.div>
                <motion.img 
                    key={selected}
                    initial={{opacity:0, y:100}}
                    animate={{opacity:1, y:0}}
                    exit={{opacity:0, y:100}}
                    transition={{...tween, duration:1.5}}
                src={testimonialsData[selected].image} alt="" />
                <div className="arrows">
                    <img src={leftArrow} alt="" onClick={() => {
                        selected === 0 ? setSelected(tLength-1):
                        setSelected((prev)=> prev - 1)
                    }}/>
                    <img src={rightArrow} alt=""  onClick={() => {
                        selected === tLength-1 ? setSelected(0):
                        setSelected((next)=> next + 1)
                    }}/>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;