import * as React from 'react';
import RawLogo from './Logo.png';
import styled from 'styled-components';
import { keyframes } from 'styled-components';

class Logo extends React.Component {
    render() {
        return (
            <LogoDiv />
        );
    }
}

const LogoDiv = styled.div`
background-image: url(${RawLogo});
background-size: cover;
width: 75px;
height: 75px;
margin: auto;
`;

export default Logo;
