import * as React from 'react';
import styled from 'styled-components';

class Masthead extends React.PureComponent {
    render() {
        return (
            <MastheadDiv>
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

const Title = styled.div`
font-size: 32px;
margin-top:85px;
color: ${props => props.theme.text.primary};
`;

const Subtitle = styled.div`
font-size: 20px;
color: ${props => props.theme.text.secondary};
`;

export default Masthead;
