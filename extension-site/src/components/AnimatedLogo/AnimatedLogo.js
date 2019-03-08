import * as React from 'react';
import styled from 'styled-components';
import { Logo } from '..';
import { keyframes, css } from 'styled-components';
import { AppContext } from '../../context';

class AnimatedLogo extends React.PureComponent {
    render() {
        return (
          <AppContext.Consumer>
            {({ globalOptions }) => (
              <LogoDiv animations={globalOptions.animations}>
                <Logo animate={globalOptions.animations} />
              </LogoDiv>
            )}
            
          </AppContext.Consumer>
        );
    }
}

let xOffset = (window.innerWidth / 2) - 200;
let yOffset = (window.innerHeight / 2) - 57;

const LogoAnimation = keyframes`
0% {
  transform: translate(${xOffset}px, ${yOffset}px) rotate(-360deg) scale(0);
}
50% {
  transform: translate(${xOffset}px, ${yOffset}px) rotate(0) scale(1.3);
}
100% {
  transform: translate(0, 0) scale(1);
}
`;

const LogoDiv = styled.div`
${props => props.animations && css`animation: ${LogoAnimation} 2s ease-in-out;`} 
z-index: 1000;
position: fixed;
top: 20px;
left: 163px;
width: 75px;
height: 75px;
display: block;
`;

export default AnimatedLogo;
