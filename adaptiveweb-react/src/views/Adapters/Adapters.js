import * as React from 'react';
import { Masthead, Menu, MenuItem } from '../';

import AdapterImage from './adapter.png';
import HelpImage from './help.png';
import SettingsImage from './settings.png';
import InfoImage from './info.png';
import styled from 'styled-components';

class Adapters extends React.Component {
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

const SidebarDiv = styled.div`
position: fixed;
top: 0;
left: 0;
bottom: 0;
width: 400px;
padding: 0;
background-color: #fff;
box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.5);
`;

export default Sidebar;
