import * as React from 'react';
import { Masthead, Menu, MenuItem } from '../';

import AdapterImage from './adapter.svg';
import HelpImage from './help.svg';
import SettingsImage from './settings.svg';
import InfoImage from './info.svg';
import styled from 'styled-components';
import { keyframes } from 'styled-components';

class Sidebar extends React.Component {
    render() {
        return (
            <SidebarDiv>
                <Masthead />
                <Menu>
                    <MenuItem path="/adapters" image={AdapterImage} text="Adapters" active={this.selected === 0} />
                    <MenuItem path="/help" image={HelpImage} text="Help" active={this.selected === 1} />
                    <MenuItem path="/settings" image={SettingsImage} text="Settings" active={this.selected === 2} />
                    <MenuItem path="/info" image={InfoImage} text="Info" active={this.selected === 3} />
                </Menu>
            </SidebarDiv>
        );
    }
}

const introFrames = keyframes`
0% {
  transform: translate(-405px, 0);
}
50% {
  transform: translate(-405px, 0);
}
100% {
  transform: translate(0, 0);
}
`;

const SidebarDiv = styled.div`
position: fixed;
top: 0;
left: 0;
bottom: 0;
width: 400px;
padding: 0;
background-color: #fff;
box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.5);
animation: ${introFrames} 2s ease-in-out;
`;

export default Sidebar;
