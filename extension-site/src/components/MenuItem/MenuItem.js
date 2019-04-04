/**
 *  Copyright 2019 The Adaptive Web. All Rights Reserved.
 * 
 *  Licensed under the Mozilla Public License 2.0 (the "License"). 
 *  You may not use this file except in compliance with the License.
 *  A copy of the License is located at
 *  
 *      https://www.mozilla.org/en-US/MPL/2.0/
 *  
 *  or in the "license" file accompanying this file. This file is distributed 
 *  on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either 
 *  express or implied. See the License for the specific language governing 
 *  permissions and limitations under the License.
 */
import React from 'react';
import styled from 'styled-components';
import { keyframes, css } from 'styled-components';
import { withRouter } from 'react-router-dom';
import { AppContext } from '../../context';
import UnstyledLink from '../UnstyledLink';

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
                    <UnstyledLink to={this.props.path}>
                        <MenuItemDiv active={active}>
                            <Container animations={globalOptions.animations} active={active}>
                                <Image image={this.props.image} active={active} />
                                <Label>{this.props.text}</Label>
                            </Container>
                        </MenuItemDiv>
                    </UnstyledLink>
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
${props => (props.active) && 'background: linear-gradient(45deg, ' + props.theme.accent.light + ' 0%, ' + props.theme.accent.dark + ' 100%);'}
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
