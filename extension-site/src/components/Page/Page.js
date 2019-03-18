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

class Page extends React.Component {
    render() {
        return (
            <PageDiv>
                <PageHeader>
                    <PageTitle>{this.props.title}</PageTitle>
                    <PageSubtitle>{this.props.subtitle}</PageSubtitle>
                </PageHeader>
                {this.props.children}
            </PageDiv>
        );
    }
}

const PageDiv = styled.div`
`;

const PageHeader = styled.div`
padding: 20px 0;
`;

const PageTitle = styled.div`
text-align: center;
font-size: 32px;
color: ${props => props.theme.text.primary};
`;

const PageSubtitle = styled.div`
text-align: center;
color: ${props => props.theme.text.secondary};
font-size: 20px;
margin-bottom: 20px;
`;

export default Page;