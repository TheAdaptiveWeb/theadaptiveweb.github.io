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

class Section extends React.Component {
    render() {
        return (
            <SectionDiv>
                <SectionTitle>
                    {this.props.title}
                </SectionTitle>
                {this.props.children}
            </SectionDiv>
        );
    }
}

const SectionDiv = styled.div`
margin-bottom: 30px;
color: ${props => props.theme.text.primary};
`;

const SectionTitle = styled.div`
font-size: 21px;
margin-bottom: 10px;
color: ${props => props.theme.text.primary};
`; 

export default Section;
