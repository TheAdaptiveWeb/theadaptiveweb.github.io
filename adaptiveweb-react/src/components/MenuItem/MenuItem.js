import React from 'react';
import styled from 'styled-components';

class MenuItem extends React.Component {
    render() {
        return (
            <MenuItemDiv active={this.props.active}>
                <Image image={this.props.image} active={this.props.active} />
                <Label>{this.props.text}</Label>
            </MenuItemDiv>
        );
    }
}

const MenuItemDiv = styled.div`
font-weight: 200;
color: ${props => (props.active) ? '#fff' : '#000'};
padding: 20px 50px;
font-size: 20px;
text-transform: uppercase;
${props => (props.active) && 'background: linear-gradient(135deg, #4a90e2 0%,#7db9e8 100%);'}
`;

const Image = styled.div`
width: 30px;
height: 30px;
margin-right: 18px;
background-size: cover;
display: inline-block;
background-image: url(${props => props.image});
${props => (props.active) ? 'filter: invert(100%);' : ''}
`;

const Label = styled.div`
display: inline-block;
vertical-align:top;
margin-top: 2px;
`;

export default MenuItem;
