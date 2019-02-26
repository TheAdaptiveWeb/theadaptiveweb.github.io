import React from 'react';
import styled from 'styled-components';
import {withRouter, Link} from 'react-router-dom';

class MenuItem extends React.Component {
    render() {
        let active = this.props.location.pathname.startsWith(this.props.path);
        return (
            <Link to={this.props.path}>
            <MenuItemDiv active={active}>
                <Image image={this.props.image} active={active} />
                <Label>{this.props.text}</Label>
            </MenuItemDiv>
            </Link>
        );
    }
}

const MenuItemDiv = styled.div`
font-weight: 200;
color: ${props => (props.active) ? '#fff' : '#000'};
padding: 20px 50px;
font-size: 20px;
text-transform: uppercase;
${props => (props.active) && 'background: linear-gradient(45deg, #7db9e8 0%, #4a90e2 100%);'}
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
margin-top: 3px;
`;

export default withRouter(MenuItem);
