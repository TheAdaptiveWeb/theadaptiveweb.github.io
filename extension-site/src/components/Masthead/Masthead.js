import * as React from 'react';
import { Logo } from '../';
import styled from 'styled-components';
import { keyframes } from 'styled-components';

class Masthead extends React.Component {
    render() {
        return (
            <MastheadDiv>
                <LogoDiv>
                    <Logo />
                </LogoDiv>
                <Title>The Adaptive Web</Title>
                <Subtitle>Adaptive Web Accessibility Toolkit</Subtitle>
            </MastheadDiv>
        );
    }
}

const MastheadDiv = styled.div`
padding: 20px;
text-align: center;
`;

let xOffset = (window.innerWidth / 2) - (200 - 37) + 405;
let yOffset = (window.innerHeight / 2) - (20);

const LogoAnimation = keyframes`
0% {
  transform: translate(${xOffset}px, ${yOffset}px) rotate(0deg) scale(0);
}
50% {
  transform: translate(${xOffset}px, ${yOffset}px) rotate(360deg) scale(1);
}
100% {
  transform: translate(0, 0);
}
`;

const LogoDiv = styled.div`
animation: ${LogoAnimation} 2s;
z-index: 1000;
`;

const Title = styled.div`
font-size: 32px;
margin-top:10px;
`;

const Subtitle = styled.div`
font-size: 20px;
color: #4A4A4A;
`;

export default Masthead;
