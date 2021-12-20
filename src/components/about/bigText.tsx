import React from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import {Animations} from "../../animations";

const BigTextStyles = styled.div`
    height:100vh;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    margin-bottom: 10vh;
    .container{
        overflow: hidden;
        width: 100%;

        h1{
            text-transform: uppercase;
            font-size: calc(var(--VW)*10);
            line-height: 13vw;
            height: 10vw;
            overflow: hidden;
        }
    }
`

const BigText = ()=>{
    const {transition, textReveal} = Animations();
    return(
        <BigTextStyles
        data-scroll-section className="big-text">
            <div className="container">
                <motion.h1 variants={textReveal} initial="initial" animate="animate" transition= {{...transition, delay: 2.9}}>Construire</motion.h1>
            </div>
            <div className="container">
                <motion.h1 variants={textReveal} initial="initial" animate="animate" transition= {{...transition, delay: 3.1}}>Des</motion.h1>
            </div>
            <div className="container">
                <motion.h1 variants={textReveal} initial="initial" animate="animate" transition= {{...transition, delay: 3.3}}>Expériences Que</motion.h1>
            </div>
            <div className="container">
                <motion.h1 variants={textReveal} initial="initial" animate="animate"  transition= {{...transition, delay: 3.4}}>Les Gens</motion.h1>
            </div>
            <div className="container">
                <motion.h1 variants={textReveal} initial="initial" animate="animate"  transition= {{...transition, delay: 3.6}}>Adorent.</motion.h1>
            </div>
        </BigTextStyles>
    )
}

export {BigText}