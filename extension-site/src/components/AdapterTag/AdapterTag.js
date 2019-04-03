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

class AdapterTag extends React.Component {
    render() {
        return (
            <Card>
                <Label>{this.props.label}</Label>
            </Card>
        );
    }
}

const Card = styled.div`
box-shadow: 0px 1px 1px 0px rgba(0,0,0,0.5);
border-radius: 3px;
height: 25px;
color: #fff;
text-align: center;
margin-top: 10px;
display: inline-block;
padding: 0px 10px;
margin-right: 5px;
position: relative;
overflow: hidden;

&:before {
    content: ' ';
    position: absolute;
    background: ${props => props.theme.gradient.purple};
    top: -1px;
    left: -1px;
    bottom: -1px;
    right: -1px;
}
`;

const Label = styled.div`
margin-top: 2px;
font-size: 16px;
position: relative;
`;

export default AdapterTag;
