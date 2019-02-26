import * as React from 'react';
import './MenuItem.css';

class MenuItem extends React.Component {
    constructor(props) {
        super(props);

        let { image, text, active } = props;
        
        this.image = image;
        this.text = text;
        this.active = active || false;
    }

    render() {
        let imageStyle = { 'background-image': `url(${this.image})` };
        return (
            <div className={"MenuItem" + ((this.active) ? " MenuItem-Active" : "")}>
                <div className="MenuItem-Image" style={imageStyle} />
                <div className="MenuItem-Label">{this.text}</div>
            </div>
        );
    }
}

export default MenuItem;