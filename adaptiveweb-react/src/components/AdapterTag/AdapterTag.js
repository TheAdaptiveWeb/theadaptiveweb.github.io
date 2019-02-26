import * as React from 'react';
import './AdapterTag.css';

class AdapterTag extends React.Component {
    constructor(props) {
        let { label, startColor, endColor } = props;

        this.label = label;
        this.startColor = startColor;
        this.endColor = endColor;
    }

    render() {
        let cardStyle = {
            background: `linear-gradient(135deg, ${this.startColor} 0%, ${this.endColor} 100%)`
        }
        return (
            <div className="Card" style={cardStyle}>
                <div className="Label">{this.label}</div>
            </div>
        );
    }
}

export default AdapterTag;
