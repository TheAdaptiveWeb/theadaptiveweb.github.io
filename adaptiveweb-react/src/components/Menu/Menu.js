import * as React from 'react';
import './Menu.css';

class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.props = props;
    }

    render() {
        return (
            <div className="Menu">
                {this.props.children}
            </div>
        );
    }
}

export default Menu;