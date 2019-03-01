import * as React from 'react';
import styled from 'styled-components';

class Button extends React.Component {
    render() {
        return (
            <StyledButton type={this.props.type || 'normal'}>
                {this.props.children}
            </StyledButton>
        );
    }
}

const StyledButton = styled.button`
box-shadow: 0px 1px 1px 0px rgba(0,0,0,0.5);
background-color: ${props => props.theme.button[props.type]};
border-radius: 3px;
`;

export default Button;
