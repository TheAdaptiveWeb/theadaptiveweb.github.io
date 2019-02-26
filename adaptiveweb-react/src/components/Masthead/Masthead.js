import * as React from 'react';
import './Masthead.css';
import { Logo } from '../';

class Masthead extends React.Component {
    render() {
        return (
            <div className="Masthead">
                <Logo />
                <div className="Title">The Adaptive Web</div>
                <div className="Subtitle">Adaptive Web Accessibility Toolkit</div>
            </div>
        );
    }
}

export default Masthead;
