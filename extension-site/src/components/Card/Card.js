import * as React from 'react';
import styled from 'styled-components';

class Card extends React.Component {
    render() {
        return (
            <CardDiv>
                {this.props.children}
            </CardDiv>
        );
    }
}

const CardDiv = styled.div`
background-color: ${props => props.theme.paper};
box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.5);
border-radius: 3px;
padding: 20px 15px;
`;

export default Card;
