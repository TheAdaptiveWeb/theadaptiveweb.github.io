import * as React from 'react';
import './Logo.css';
import RawLogo from './Logo.png';

class Logo extends React.Component {
    render() {
        return (
            <img alt="The Adaptive Web logo" src={RawLogo} className="Logo" />
        );
    }
}

export default Logo;
