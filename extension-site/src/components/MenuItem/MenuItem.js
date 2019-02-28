import React from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import {withRouter, Link} from 'react-router-dom';

class MenuItem extends React.Component {
    shouldComponentUpdate(newProps) {
        let currentlyActive = this.props.location.pathname.startsWith(this.props.path);
        let nowActive = newProps.location.pathname.startsWith(this.props.path);
        return currentlyActive != nowActive;
    }

    render() {
        let active = this.props.location.pathname.startsWith(this.props.path);
        return (
            <Link to={this.props.path}>
                <MenuItemDiv active={active}>
                    <Container active={active}>
                        <Image image={this.props.image} active={active} />
                        <Label>{this.props.text}</Label>
                    </Container>
                </MenuItemDiv>
            </Link>
        );
    }
}

const PassiveFrames = keyframes`
0% {
    transform: translate(20px, 0);
}
100% {
    margin-left: translate(0, 0);
}
`;

const ActiveFrames = keyframes`
0% {
    transform: translate(-20px, 0);
}
100% {
    transform: translate(0, 0);
}
`;

const MenuItemDiv = styled.div`
font-weight: 200;
color: ${props => (props.active) ? '#fff' : '#000'};
padding: 20px 50px;
font-size: 20px;
text-transform: uppercase;
${props => (props.active) && 'background: linear-gradient(45deg, #7db9e8 0%, #4a90e2 100%);'}
`;

const Container = styled.div`
animation: ${props => (props.active) ? ActiveFrames : PassiveFrames} 0.5s ease;
`;

const Image = styled.div`
width: 30px;
height: 30px;
${props => (props.active) && 'margin-left: 20px;'}
margin-right: 18px;
background-size: cover;
display: inline-block;
background-image: url(${props => props.image});
${props => (props.active) && 'filter: invert(100%);'}
`;

const Label = styled.div`
display: inline-block;
vertical-align:top;
margin-top: 3px;
`;

export default withRouter(MenuItem);
