import * as React from 'react';
import styled from 'styled-components';

class Separator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: false
        }
    }

    render() {
        return (
            <SeparatorDiv></SeparatorDiv>
        );
    }
}

const SeparatorDiv = styled.div`
border-bottom: solid 1px ${props => props.theme.separatorColor};
margin: 15px 0;
`;

export default Separator;
