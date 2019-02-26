import * as React from 'react';
import './Sidebar.css';
import { Masthead, Menu, MenuItem } from '../';

import AdapterImage from './adapter.png';
import HelpImage from './help.png';
import SettingsImage from './settings.png';
import InfoImage from './info.png';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.selected = 0;
    }

    render() {
        return (
            <div className="Sidebar">
                <Masthead />
                <Menu>
                    <MenuItem image={AdapterImage} text="Adapters" active={this.selected === 0} />
                    <MenuItem image={HelpImage} text="Help" active={this.selected === 1} />
                    <MenuItem image={SettingsImage} text="Settings" active={this.selected === 2} />
                    <MenuItem image={InfoImage} text="Info" active={this.selected === 3} />
                </Menu>
            </div>
        );
    }
}

export default Sidebar;
