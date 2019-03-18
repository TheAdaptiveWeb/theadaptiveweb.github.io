import * as React from 'react';
import styled from 'styled-components';
import AdapterTag from '../AdapterTag';
import { Card } from '..';
import { Link } from 'react-router-dom';

class AdapterCard extends React.Component {
    render() {
        return (
            <CardContainer>
                <Link to={'/adapters/' + this.props.adapter.id || ""}>
                    <Card>
                        <div>
                            <Title>{this.props.adapter.name}</Title>
                            <Subtitle>{this.props.adapter.description}</Subtitle>
                            <AdapterTags>{this.props.adapter.tags.map((tag, index) => <AdapterTag key={`label-${index}`} label={tag} startColor="#9277EE" endColor="#874AE2" />)}</AdapterTags>
                        </div>
                    </Card>
                </Link>
            </CardContainer>
        );
    }
}

const CardContainer = styled.div`
flex-grow: 1;
margin: 10px;
`;

const Title = styled.div` 
font-size: 20px;
color: ${props => props.theme.text.primary};
`;

const Subtitle = styled.div` 
font-size: 18px;
color: ${props => props.theme.text.secondary};
`;

const AdapterTags = styled.div`
display: flex;
overflow: hidden;
flex-wrap: wrap;
height: 38px;
`;

export default AdapterCard;
