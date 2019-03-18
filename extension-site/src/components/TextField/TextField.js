import * as React from 'react';
import styled from 'styled-components';
import Label from '../Label';

class TextField extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        }
    }

    render() {
        return (
            <TextFieldDiv>
                <Label title={this.props.title} subtitle={this.props.subtitle}  />
                <Field />
            </TextFieldDiv>
        );
    }
}

const TextFieldDiv = styled.label`
position: relative;
box-sizing: border-box;
`;

const Field = styled.input.attrs({ type: 'text' })`
width: 100%;
background-color: ${props => props.theme.field.bg};
border: none;
border-radius: 6px;
padding: 10px;
box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.5);
box-sizing: border-box;
margin-top: 5px;
font-size: 14px;
font-family: 'Nunito', sans-serif;
border: 1px solid ${props => props.theme.field.bg};
color: ${props => props.theme.field.text};

&:focus {
outline: none;
box-shadow: 0px 1px 5px 0px rgba(74,144,226,1);
border: 1px solid rgba(74,144,226,1);
}
`;



export default TextField;
