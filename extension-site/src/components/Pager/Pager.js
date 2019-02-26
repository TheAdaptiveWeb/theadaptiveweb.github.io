import * as React from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';

class Pager extends React.Component {
    render() {
        return (
            <PagerDiv>
                {this.props.children}
            </PagerDiv>
        );
    }
}

const introFrames = keyframes`
0% {
  opacity: 0;
}
50% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;


const PagerDiv = styled.div`
left: 400px;
top: 0;
right: 0;
bottom: 0;
position: absolute;
padding: 20px 40px;
animation: ${introFrames} 2s ease-in-out;
`;

export default Pager;