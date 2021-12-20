import React, {useRef, useEffect} from "react";
import styled from "styled-components";
import hoverEffect from "hover-effect";
import Logo from "../../assets/images/homepage/logo.png";
import Displacement from "../../assets/images/homepage/displacement.jpg";

const MainSectionStyles = styled.div`
    margin: 20vh 0;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (hover: none) and (pointer: coarse), (max-width: 500px){
        flex-wrap: wrap;
        justify-content: flex-start;
        margin-bottom: 10vh;
    }

    .main-pic{
        width: 25vw;
        height: 30vw;
        margin-right: 5vw;
        text-align: center;
        overflow: hidden;
        @media (hover: none) and (pointer: coarse), (max-width: 500px){
            width: 100%;
            width: 50vw;
            height: 55vw;
        }
    }
    .main-text{
        width: 45%;
        @media (hover: none) and (pointer: coarse), (max-width: 500px){
            width: 95%;
        }
        
        h2{
            font-size: calc(var(--VW)*2);
            @media (hover: none) and (pointer: coarse), (max-width: 500px){
                font-size: calc(var(--VW)*5);
            }
        }

        p{
            margin: 3vw 0;
            mix-blend-mode: normal;
            @media (hover: none) and (pointer: coarse), (max-width: 500px){
                margin: 5vw 0;
            }
            a{
                font-family:   Grotesk;
                text-transform: none;
                mix-blend-mode: normal;
            }
        }
    }
`

const MainSection = ()=>{
    const profileRef = useRef(null);
    useEffect(()=>{
        new hoverEffect({
            parent: profileRef.current,
            intensity: 1.4,
            image1: Logo,
            image2: Logo,
            displacementImage: Displacement
        })
    });
    return(
        <MainSectionStyles data-scroll-section className="main">
            <div data-scroll data-scroll-speed="6" className="main-pic" ref={profileRef}></div>
            <div className="main-text">
                <h2>Tout d'abord, merci d'avoir visité mon site Web!</h2>
                <br />
                <h2>Je crée des expériences sur Internet que les gens aiment utiliser et avec lesquelles ils aiment interagir.</h2>
            </div>
        </MainSectionStyles>
    )
}

export {MainSection}