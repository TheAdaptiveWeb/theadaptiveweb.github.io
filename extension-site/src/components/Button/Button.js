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

class Button extends React.Component {
    render() {
        return (
            <StyledButton onClick={this.props.onClick} type={this.props.type || 'normal'}>
                {this.props.children}
            </StyledButton>
        );
    }
}

const StyledButton = styled.button`
box-shadow: 0px 1px 1px 0px rgba(0,0,0,0.5);
background-color: ${props => props.theme.button[props.type]};
border: none;
font-size: 16px;
border-radius: 3px;
color: ${props => props.theme.link.active};
text-transform: uppercase;
padding: 8px 20px;
font-family: 'Nunito', sans-serif;
margin-left: 10px;
`;

export default Button;
