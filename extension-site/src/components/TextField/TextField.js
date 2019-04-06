/**
 *  Copyright 2019 The Adaptive Web. All Rights Reserved.
 * 
 *  Licensed under the Mozilla Public License 2.0 (the "License"). 
 *  You may not use this file except in compliance with the License.
 *  A copy of the License is located at
 *  
 *      https://www.mozilla.org/en-US/MPL/2.0/
 *  
 *  or in the "license" file accompanying this file. This file is distributed 
 *  on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either 
 *  express or implied. See the License for the specific language governing 
 *  permissions and limitations under the License.
 */
import * as React from 'react';
import styled from 'styled-components';
import Label from '../Label';

class TextField extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: props.value
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.state.value) {
          this.setState({ value: nextProps.value });
        }
    }
      

    render() {
        return (
            <TextFieldDiv>
                <Label title={this.props.title} subtitle={this.props.subtitle}  />
                <Field value={this.state.value} onChange={event => this.props.onChange(event.target.value)} />
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
