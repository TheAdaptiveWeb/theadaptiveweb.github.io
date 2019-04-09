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

class Pager extends React.Component {
	render() {
		return (
			<PagerDiv>
				{this.props.children}
			</PagerDiv>
		);
	}
}


const PagerDiv = styled.div`
left: 0;
top: 0;
right: 0;
bottom: 0;
position: absolute;
padding: 20px 40px;
overscroll-behavior-y: contain;
height: 100%;
box-sizing: border-box;
`;

export default Pager;