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

class InfoCard extends React.Component {
	render() {
		return (
			<CardDiv>
				<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path fill="#62A8E8" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
				<ContentDiv>
					{this.props.children}
				</ContentDiv>
			</CardDiv>
		);
	}
}

const CardDiv = styled.div`
background-color: ${props => props.theme.paper};
box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.5);
border-radius: 3px;
border-left: 5px solid ${props => props.theme.accent.normal};
font-size: 18px;
padding: 15px;
display: flex;
align-items: top;
`;

const ContentDiv = styled.div`
margin-left: 10px;
margin-top: 4px;
`;

export default InfoCard;
