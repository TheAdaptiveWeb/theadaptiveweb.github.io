import * as React from 'react';
import styled from 'styled-components';

class Button extends React.Component {
    render() {
        return (
            <StyledButton onClick={this.props.onClick} type={this.props.type || 'normal'}>
                {this.props.children}
            </StyledButton>
        );
    }
}

const StyledButton = styled.button`
box-shadow: 0px 1px 1px 0px rgba(0,0,0,0.5);
background-color: ${props => props.theme.button[props.type]};
border: none;
font-size: 16px;
border-radius: 3px;
color: ${props => props.theme.link.active};
text-transform: uppercase;
padding: 8px 20px;
font-family: 'Nunito', sans-serif;
margin-left: 10px;
`;

export default Button;
