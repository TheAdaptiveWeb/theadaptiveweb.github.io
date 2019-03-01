import * as React from 'react';
import styled from 'styled-components';

class Card extends React.Component {
    render() {
        return (
            <CardDiv>
                {React.Children.map(this.props.children, (child, index) => (<InnerDiv border={index !== 0}>{child}</InnerDiv>))}
            </CardDiv>
        );
    }
}

const CardDiv = styled.div`
background-color: ${props => props.theme.paper};
box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.5);
border-radius: 3px;
`;

const InnerDiv = styled.div`
padding: 15px;
${props => props.border && `border-top: 1px solid #D8D8D8;`};
`;

export default Card;
