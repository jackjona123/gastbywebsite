import React from "react";
import styled from "styled-components";
import {Panels} from "../components/panels";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";

const Contact = styled(motion.div)`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    .content{
        text-align: center;
        max-width: 420px;
        * {
            display: flex;
            flex-direction: column;
            margin: 1vh 0;
            text-transform: capitalize;
            padding: 10px;
            font-family: Monument;
        }
        h1{
            font-size: calc(var(--VW)*10);
        }
        label{
            font-size: calc(var(--VW)*2);
        }
        input, textarea {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: calc(var(--VW)*2);
            border-radius: 12px;
        }
        
        @media only screen and (max-width: 600px) {
            h1{
            font-size: calc(var(--VW)*16);
            }
            label{
                font-size: calc(var(--VW)*10);
            }
            input{
                font-size: calc(var(--VW)*5);
            }
        } 

        @media only screen and (max-width: 360px) {
            max-width: 340px;
            h1{
                display: none;
            }
        } 
    }
`
const Submit = styled.input`
    display: inline-block;
    border: none;
    padding: 1rem 2rem;
    margin: 0;
    text-decoration: none;
    background: #BF40BF;
    color: #ffffff;
    font-family: sans-serif;
    font-size: 1rem;
    cursor: pointer;
    text-align: center;
    -webkit-appearance: none;
    -moz-appearance: none;

    &:hover {
        background: #E0B0FF;
    }
`;

const Next = styled.div`
    display: flex;
    justify-content: flex-start;
    font-size: calc(var(--VW) *3);
    padding-top: 12px;
    padding-left: 12px;
    @media (hover: none) and (pointer: coarse), (max-width: 500px){
        font-size: calc(var(--VW) *6);
    }
    .next{
        span{
            position: relative;
            top: -5%;
            right: -5%;
            transition: 0.3s all ease-out;
            pointer-events: none;
        }
        &:hover{
            span{
                right: 5%;
                transition: 0.3s all ease-out;
            }
        }
    }
`


const contact = () => {
    return (
        <>
        <Panels />
        <Next data-scroll-section>
            <Link to={"/"} className="next"><span>&lsaquo;</span> Retour </Link>
        </Next>
        <Contact
        initial={{backgroundColor: "#000000", pointerEvents: "none"}}
        animate={{backgroundColor: "transparent", pointerEvents: "unset"}}
        exit={{opacity: [1, 1, 0], transition:{duration: 2, times: [0, 0.99, 1]}}}
        >

            <div className="content">
                <form name="contact" method="POST" action="https://formspree.io/f/xnqlllez">
                <div>
              <label htmlFor="name">Nom</label>
              <input type="text" name="name" id="name" required/>
            </div>
            <div>
              <label htmlFor="email">E-mail</label>
              <input type="text" name="_replyto" id="email" required/>
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" required></textarea>
            </div>
            <ul>
              <li>
                <Submit type="submit" value="Envoyer"/>
              </li>
            </ul>
            
                </form>
            </div>

        </Contact>
 
        </>
    )
}

export default contact;
