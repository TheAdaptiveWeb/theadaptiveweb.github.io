import * as React from 'react';
import styled from 'styled-components';

class CardInner extends React.Component {
    render() {
        return (
            <InnerDiv>
                {this.props.children}
            </InnerDiv>
        );
    }
}

const InnerDiv = styled.div`
padding: 20px 15px;
`;

export default CardInner;
