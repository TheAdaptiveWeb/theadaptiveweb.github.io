import * as React from 'react';
import styled from 'styled-components';

class Card extends React.Component {
    constructor(props) {
        this.props = props;
    }

    render() {
        return (
            <CardDiv>
                {this.props.children}
            </CardDiv>
        );
    }
}

const CardDiv = styled.div`
background-color: #fff;
box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.5);
`;

export default Card;
