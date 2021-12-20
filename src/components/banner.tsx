import React from "react";
import styled from "styled-components";

const BannerStyles = styled.div`
    position: fixed; 
    z-index: 999; 
    transform: translateY(-50%); 
    top: 50%;  
    right: 0;
`

export const Banner = ()=>{
    return(
        <BannerStyles id="Banner">
            <a href="https://www.jackjona.me">

            </a>
        </BannerStyles>
    )
}