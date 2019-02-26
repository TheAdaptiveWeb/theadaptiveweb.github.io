import * as React from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { Logo } from '..';

class PreloadLogo extends React.Component {
    render() {
        return (
            <PreloadLogoDiv>
                <Logo />
            </PreloadLogoDiv>
        );
    }
}

let width = window.innerWidth;
let height = window.innerHeight;

const introFrames = keyframes`
0% {
  transform: translate(${width/2}px, ${height/2}px) rotate(0deg) scale(0);
  opacity: 1;
}
50% {
  transform: translate(${width/2}px, ${height/2}px) rotate(360deg) scale(1);
  opacity: 1;
}
100% {
  transform: translate(200px, 57px);
  opacity: 1;
}
`;

const PreloadLogoDiv = styled.div`
position: absolute;
opacity: 0;
margin-top: -37px;
margin-left: -37px;
width: 75px;
height: 75px;
animation: ${introFrames} 2s ease-in-out;
`;

export default PreloadLogo;
