import * as React from 'react';
import styled from 'styled-components';

class Menu extends React.Component {
    render() {
        return (
            <MenuDiv>
                {this.props.children}
            </MenuDiv>
        );
    }
}

const MenuDiv = styled.div`
`;

export default Menu;