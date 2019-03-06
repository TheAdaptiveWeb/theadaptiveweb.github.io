import * as React from 'react';
import styled from 'styled-components';

class CardList extends React.Component {
    render() {
        return (
            <CardListDiv>
                {this.props.children.map(child => {
                    return <CardDiv>{child}</CardDiv>
                })}
            </CardListDiv>
        );
    }
}

const CardListDiv = styled.div`
margin: 0 -10px;
`;

const CardDiv = styled.div`
width: 100%;
display: inline-block;

@media (min-width: 1050px) {
    width: 50%;
}

@media (min-width: 1375px) {
    width: 33.3%;
}
`;

export default CardList;
