import * as React from 'react';
import styled from 'styled-components';

class AdapterTag extends React.Component {
    render() {
        return (
            <Card>
                <Label>{this.label}</Label>
            </Card>
        );
    }
}

const Card = styled.div`
box-shadow: 0px 1px 1px 0px rgba(0,0,0,0.5);
background: linear-gradient(135deg, ${props => props.startColor} 0%, ${props => props.endColor} 100%);
`;

const Label = styled.div`
`;

export default AdapterTag;
