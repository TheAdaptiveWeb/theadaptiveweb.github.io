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

class Card extends React.Component {
    render() {
        return (
            <CardDiv>
                {React.Children.map(this.props.children, (child, index) => (<InnerDiv border={index !== 0}>{child}</InnerDiv>))}
            </CardDiv>
        );
    }
}

const CardDiv = styled.div`
background-color: ${props => props.theme.paper};
box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.5);
border-radius: 3px;
`;

const InnerDiv = styled.div`
padding: 15px;
${props => props.border && `border-top: 1px solid ${props.theme.separatorColor};`};
`;

export default Card;
