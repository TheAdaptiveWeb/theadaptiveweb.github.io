import * as React from 'react';
import './AdapterCard.css';
import Card from '../Card';

class AdapterCard extends React.Component {
    constructor(props) {
        let { title, subtitle, tags } = props;

        this.title = title;
        this.subtitle = subtitle;
        this.tags = tags;
    }

    render() {
        return (
            <Card>
                <div className="Title">{this.title}</div>
                <div className="Subtitle">{this.subtitle}</div>
            </Card>
        );
    }
}

export default AdapterCard;
