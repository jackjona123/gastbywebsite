import React from "react";
import styled from "styled-components";

const InfoStyles = styled.div`
    margin-bottom: 20vh;
    margin-right: 5vw;
    display: flex;
    justify-content: space-between;
    @media (hover: none) and (pointer: coarse), (max-width: 500px){
        flex-wrap: wrap;
        margin-bottom: 10vh;
    }
    .info-main{
        width: 48%;
        @media (hover: none) and (pointer: coarse), (max-width: 500px){
            width: 95%;
        }
        h2{
            font-size: calc(var(--VW)*2);
            @media (hover: none) and (pointer: coarse), (max-width: 500px){
                font-size: calc(var(--VW)*4);
            }
        }
        p{
            margin-bottom: 3vw;
            @media (hover: none) and (pointer: coarse), (max-width: 500px){
                margin-bottom: 5vw;
            }
            :last-child{
                margin-bottom: 0;
            }
        }
    }
    .info-credits{
        width: 35%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        @media (hover: none) and (pointer: coarse){
            width: 68%;
            margin-top: 10vh;
        }
        @media (hover: none) and (pointer: coarse) and (max-width: 500px){
            width: 80%;
            margin-top: 10vh;
        }
        h1{
            font-size: calc(var(--VW)*4);
            @media (hover: none) and (pointer: coarse), (max-width: 500px){
                font-size: calc(var(--VW)*6);
            }
        }
        h2{
            font-size: calc(var(--VW)*2);
            margin: 0.5vw 0;
            @media (hover: none) and (pointer: coarse), (max-width: 500px){
                font-size: calc(var(--VW)*4);
            }
            :last-child{
                margin-bottom: 0;
            }
        }
        p{
            margin-bottom: 3vw;
            :nth-child(2){
                margin-bottom: 1vw;
                margin-top: 0.5vw;
            }
        }
    }
`

const Info = ()=>{
    return(
        <InfoStyles data-scroll-section  className="info">
            <div className="info-main">
                <h2>Languages</h2>
                <p>TypeScript, JavaScript(ES6+), HTML, CSS/Scss/Sass</p>
                <h2>Frameworks &#38; Others</h2>
                <p>React.js, Gatsby.js, Next.js, Firebase, Framer Motion, GSAP, Styled Components, Tailwind CSS, Git, NPM, PWA</p>
                <h2>UI/UX</h2>
                <p>Responsive Design, Prototyping, Figma, Adobe Photoshop, Usability Testing</p>
                <h2>Learning</h2>
                <p>Node.js, Vue.js, Python</p>
                <h2>Other Skills</h2>
                <p>Networking, Systems Administration, Photography and Media Production</p>

                {/*
                <h2>Volunteer/Organizations</h2>
                <p>Will Add Once I Volunteer More</p>
                <h2>Education</h2>
                <p>Need To Add More Education <br/>University of Toronto Exp. June 2030</p>
                <p>Need To Insert Course Here<br/>Self-Taught May 2021</p>
                */}

            </div>
            
            <div className="info-credits">
                <br />
                <h1>Credits</h1>
                <p>This Website Is Built With React.js. And Animations Powered By Framer Motion.</p>
                <p>This Website Was Inspried By The Following Individuals And Companies:</p>
                <h2><a href="https://github.com/lavaboy1738/" rel="noreferrer" target="_blank">Ronnie Feng</a></h2>
                <h2><a href="https://pitchfork.com/reviews/albums/jay-z-444/" target="_blank" rel="noreferrer">Jay-Z's 4:44</a></h2>
                <h2><a href="https://www.loftgarten.co/" target="_blank" rel="noreferrer">Loftgarten</a></h2>
                <h2><a href="http://www.iaragrinspun.com/" target="_blank" rel="noreferrer">Iara Grinspun</a></h2>
                <h2><a href="https://romainavalle.com/" target="_blank" rel="noreferrer">Romain Avalle</a></h2>
                <h2><a href="https://loerarchitecten.com/en/" target="_blank" rel="noreferrer">Loer Architecten</a></h2>
                <h2><a href="https://www.behance.net/martiniidesign" rel="noreferrer" target="_blank">Stefan Martinovic</a></h2>
                <h2><a href="https://lorenzocadamuro.com/" target="_blank" rel="noreferrer">Lorenzo Cadamuro</a></h2>      
            </div>
        </InfoStyles>
    )
}

export {Info}