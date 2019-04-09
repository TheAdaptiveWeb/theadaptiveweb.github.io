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

class Masthead extends React.PureComponent {
	render() {
		return (
			<MastheadDiv>
				<Title>The Adaptive Web</Title>
				<Subtitle>Adaptive Web Accessibility Platform</Subtitle>
			</MastheadDiv>
		);
	}
}

const MastheadDiv = styled.div`
padding: 20px;
text-align: center;
margin-bottom: 20px;
`;

const Title = styled.div`
font-size: 32px;
margin-top:105px;
color: ${props => props.theme.text.primary};
`;

const Subtitle = styled.div`
font-size: 20px;
color: ${props => props.theme.text.secondary};
`;

export default Masthead;
