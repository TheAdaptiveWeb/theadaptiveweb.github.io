import * as React from 'react';
import { Card } from '../';
import styled from 'styled-components';

class AdapterCard extends React.Component {
    render() {
        return (
            <Card>
                <Title>{this.props.title}</Title>
                <Subtitle>{this.props.subtitle}</Subtitle>
            </Card>
        );
    }
}

const Title = styled.div` 
font-size: 20px;
color: ${props => props.active ? 'green' : 'black'};
`;

const Subtitle = styled.div` 
font-size: 20px;
color: ${props => props.active ? 'green' : 'black'};
`;

export default AdapterCard;
