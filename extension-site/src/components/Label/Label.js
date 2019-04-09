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

class Label extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			checked: false
		};
	}

	render() {
		return (
			<LabelDiv>
				<LabelTitle>{this.props.title}</LabelTitle>
				<LabelSubtitle>{this.props.subtitle}</LabelSubtitle>
			</LabelDiv> 
		);
	}
}

const LabelDiv = styled.div`
`;

const LabelTitle = styled.div`
font-weight: bold;
font-size: 17px;
`;

const LabelSubtitle = styled.div`
`;

export default Label;
