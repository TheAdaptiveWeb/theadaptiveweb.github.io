import * as React from 'react';
import styled from 'styled-components';

class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.props = props;
    }

    render() {
        return (
            <div className="Menu">
                {this.props.children}
            </div>
        );
    }
}

const MenuDiv = styled.div`
`;

export default Menu;