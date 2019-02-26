import * as React from 'react';
import styled from 'styled-components';

class CardList extends React.Component {
    render() {
        return (
            <CardListDiv>
                {this.props.children}
            </CardListDiv>
        );
    }
}

const CardListDiv = styled.div`
display: flex;
flex-wrap: wrap;
margin: -10px;
`;

export default CardList;
