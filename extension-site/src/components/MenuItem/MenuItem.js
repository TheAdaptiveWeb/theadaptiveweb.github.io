import React from 'react';
import styled from 'styled-components';
import { keyframes, css } from 'styled-components';
import {withRouter, Link} from 'react-router-dom';
import { AppContext } from '../../context';

class MenuItem extends React.Component {
    shouldComponentUpdate(newProps) {
        let currentlyActive = this.props.location.pathname.startsWith(this.props.path);
        let nowActive = newProps.location.pathname.startsWith(this.props.path);
        return currentlyActive !== nowActive;
    }

    render() {
        let active = this.props.location.pathname.startsWith(this.props.path);
        return (
            <AppContext.Consumer>
                {({ globalOptions }) => (
                    <Link to={this.props.path}>
                        <MenuItemDiv active={active}>
                            <Container animations={globalOptions.animations} active={active}>
                                <Image image={this.props.image} active={active} />
                                <Label>{this.props.text}</Label>
                            </Container>
                        </MenuItemDiv>
                    </Link>
                )}
            </AppContext.Consumer>
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
color: ${props => (props.active) ? props.theme.link.active : props.theme.link.inactive};
padding: 20px 50px;
font-size: 20px;
text-transform: uppercase;
${props => (props.active) && 'background: ' + props.theme.gradient.primary}
`;

const Container = styled.div`
${props => props.animations && css`animation: ${props => (props.active) ? ActiveFrames : PassiveFrames} 0.5s ease;`}
`;

const Image = styled.div`
width: 30px;
height: 30px;
${props => (props.active) && 'margin-left: 20px;'}
margin-right: 18px;
background-size: cover;
display: inline-block;
background-image: url(${props => props.image});
${props => (props.active) ? props.theme.link.activeIcon : props.theme.link.inactiveIcon}
`;

const Label = styled.div`
display: inline-block;
vertical-align:top;
margin-top: 3px;
`;

export default withRouter(MenuItem);
