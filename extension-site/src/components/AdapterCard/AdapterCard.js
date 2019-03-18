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
import AdapterTag from '../AdapterTag';
import { Card } from '..';
import { Link } from 'react-router-dom';

class AdapterCard extends React.Component {
    render() {
        return (
            <CardContainer>
                <Link to={'/adapters/' + this.props.adapter.id || ""}>
                    <Card>
                        <div>
                            <Title>{this.props.adapter.name}</Title>
                            <Subtitle>{this.props.adapter.description}</Subtitle>
                            <AdapterTags>{this.props.adapter.tags.map((tag, index) => <AdapterTag key={`label-${index}`} label={tag} startColor="#9277EE" endColor="#874AE2" />)}</AdapterTags>
                        </div>
                    </Card>
                </Link>
            </CardContainer>
        );
    }
}

const CardContainer = styled.div`
flex-grow: 1;
margin: 10px;
`;

const Title = styled.div` 
font-size: 20px;
color: ${props => props.theme.text.primary};
`;

const Subtitle = styled.div` 
font-size: 18px;
color: ${props => props.theme.text.secondary};
`;

const AdapterTags = styled.div`
overflow: hidden;
height: 38px;
`;

export default AdapterCard;
