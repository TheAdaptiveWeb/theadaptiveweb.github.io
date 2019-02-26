import * as React from 'react';
import styled from 'styled-components';
import AdapterTag from '../AdapterTag';

class AdapterCard extends React.Component {
    render() {
        return (
            <Card>
                <Title>{this.props.title}</Title>
                <Subtitle>{this.props.subtitle}</Subtitle>
                {this.props.tags.map((tag, index) => <AdapterTag key={`label-${index}`} label={tag} startColor="#9277EE" endColor="#874AE2" />)}
            </Card>
        );
    }
}

const Card = styled.div`
background-color: #fff;
box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.5);
border-radius: 3px;
padding: 20px 15px;
flex-grow: 1;
margin: 10px;
`;

const Title = styled.div` 
font-size: 20px;
`;

const Subtitle = styled.div` 
font-size: 18px;
color: #4A4A4A;
`;

export default AdapterCard;
