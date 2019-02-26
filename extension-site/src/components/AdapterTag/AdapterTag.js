import * as React from 'react';
import styled from 'styled-components';

class AdapterTag extends React.Component {
    render() {
        return (
            <Card startColor={this.props.startColor} endColor={this.props.endColor}>
                <Label>{this.props.label}</Label>
            </Card>
        );
    }
}

const Card = styled.div`
box-shadow: 0px 1px 1px 0px rgba(0,0,0,0.5);
background: linear-gradient(135deg, ${props => props.startColor} 0%, ${props => props.endColor} 100%);
border-radius: 3px;
height: 25px;
color: #fff;
text-align: center;
margin-top: 10px;
display: inline-block;
padding: 0px 10px;
margin-right: 5px;
`;

const Label = styled.div`
margin-top: 2px;
font-size: 16px;
`;

export default AdapterTag;
