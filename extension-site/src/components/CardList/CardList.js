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

class CardList extends React.Component {
    render() {
        return (
            <CardListDiv>
                {React.Children.map(this.props.children, (child, index) => {
                    return <CardDiv key={'cl-' + index}>{child}</CardDiv>
                })}
            </CardListDiv>
        );
    }
}

const CardListDiv = styled.div`
margin: 0 -10px;
`;

const CardDiv = styled.div`
width: 100%;
display: inline-block;

@media (min-width: 1050px) {
    width: 50%;
}

@media (min-width: 1375px) {
    width: 33.3%;
}
`;

export default CardList;
