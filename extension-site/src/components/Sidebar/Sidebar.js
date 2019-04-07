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
import * as React from 'react';
import { Masthead, Menu, MenuItem } from '../';

import AdapterImage from './adapter.svg';
import HelpImage from './help.svg';
import SettingsImage from './settings.svg';
import InfoImage from './info.svg';
import styled from 'styled-components';
import { keyframes, css } from 'styled-components';
import { AppContext } from '../../context';

class Sidebar extends React.Component {
    render() {
        return (
          <AppContext.Consumer>
            {({ globalOptions }) => (
              <SidebarDiv animations={globalOptions.animations}>
                <Masthead />
                <Menu>
                  <MenuItem path="/adapters" image={AdapterImage} text="Adapters" />
                  <MenuItem path="https://docs.adaptiveweb.io" image={HelpImage} text="Help" />
                  <MenuItem path="/settings" image={SettingsImage} text="Settings" />
                  <MenuItem path="/info" image={InfoImage} text="Info" />
                </Menu>
              </SidebarDiv>
            )}
            
          </AppContext.Consumer>
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
background-color: ${props => props.theme.paper};
box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.5);
${props => props.animations && css`animation: ${introFrames} 2s ease-in-out;`}
z-index: 100;
`;

export default Sidebar;
