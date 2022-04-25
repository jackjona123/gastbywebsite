import React from "react";
import styled from "styled-components";

const MobileBannerStyles = styled.div`
    position: fixed; 
    z-index: 999; 
    transform: translateY(-50%); 
    top: 50%;  
    right: 0;
`

export const MobileBanner = ()=>{
    return (
        <MobileBannerStyles id="banner">
            <a href="/" target="_blank" rel="noreferrer">
            <svg width="36" height="89" viewBox="0 0 36 89" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 2C0 0.89543 0.895431 0 2 0H34C35.1046 0 36 0.895431 36 2V87C36 88.1046 35.1046 89 34 89H2C0.895432 89 0 88.1046 0 87V2Z" fill="black"/>
            </svg>
            </a>
        </MobileBannerStyles>
    )
}