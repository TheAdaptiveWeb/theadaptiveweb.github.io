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
import { Logo } from '..';
import { keyframes, css } from 'styled-components';
import { AppContext } from '../../context';

class AnimatedLogo extends React.PureComponent {
	render() {
		return (
			<AppContext.Consumer>
				{({ globalOptions }) => (
					<LogoDiv animations={globalOptions.animations}>
						<Logo animate={globalOptions.animations} />
					</LogoDiv>
				)}
            
			</AppContext.Consumer>
		);
	}
}

let xOffset = (window.innerWidth / 2) - 200;
let yOffset = (window.innerHeight / 2) - 77;

const LogoAnimation = keyframes`
0% {
  transform: translate(${xOffset}px, ${yOffset}px) rotate(-360deg) scale(0);
}
50% {
  transform: translate(${xOffset}px, ${yOffset}px) rotate(0) scale(1.3);
}
100% {
  transform: translate(0, 0) scale(1);
}
`;

const LogoDiv = styled.div`
${props => props.animations && css`animation: ${LogoAnimation} 2s ease-in-out;`} 
z-index: 1000;
position: fixed;
top: 40px;
left: 163px;
width: 75px;
height: 75px;
display: block;
`;

export default AnimatedLogo;
