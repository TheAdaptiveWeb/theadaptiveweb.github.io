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
import { Modal, AdapterTag, Button } from '..';
import BackLink from '../BackLink';
import styled from 'styled-components';
import AdapterSettings from '../AdapterSettings';
import ReactMarkdown from 'react-markdown';
import UnstyledLink from '../UnstyledLink';

class AdapterModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'description',
            displayDescription: !!this.props.adapter.about,
            displaySettings: Object.keys(this.props.adapter.preferenceSchema).length !== 0,
        };
    }

    setPage(newPage) {
        this.setState({
            page: newPage
        });
    }

    render() {
        return (
            <Modal>
                <div>
                    <UnstyledLink to="/adapters"><BackLink>Back to Adapters</BackLink></UnstyledLink>
                    <Title>{this.props.adapter.name}</Title>
                    <Subtitle>{this.props.adapter.description}</Subtitle>
                    <AdapterTags>{this.props.adapter.tags.map((tag, index) => <AdapterTag key={`label-${index}`} label={tag} />)}</AdapterTags>
                </div>

                { this.props.adapter.developer 
                    && <DevContainer>Developer mode: Run `awcli publish` to publish</DevContainer>}

                { (this.state.displayDescription || (this.state.displaySettings && this.props.installed)) && 
                <PageContainer>
                    { (this.state.page === 'description' && this.state.displayDescription)
                    ? <ReactMarkdown source={this.props.adapter.about} escapeHtml={false} />
                    : <AdapterSettings schema={this.props.adapter.preferenceSchema} values={this.props.preferences} onChange={(key, value) => {
                        this.props.updateAdapterPreferences(this.props.adapter.id, { [ key ]: value });
                    }} /> }
                </PageContainer>}

                <ActionsContainer>
                    <Actions>
                        { this.state.displayDescription && this.state.displaySettings
                        && <Button onClick={() => this.setPage(this.state.page === 'description' ? 'settings' : 'description')}>
                                {this.state.page === 'description' ? 'settings' : 'description'}
                            </Button> }
                        {this.props.installed
                        ? <Button onClick={() => this.props.removeAdapter(this.props.adapter.id)} type="danger">Disable</Button>
                        : <Button onClick={() => this.props.installAdapter(this.props.adapter)}>Enable</Button>}
                    </Actions>
                </ActionsContainer>
            </Modal>
        );
    }
}

const Title = styled.div` 
font-size: 20px;
color: ${props => props.theme.text.primary};
`;

const Subtitle = styled.div` 
font-size: 18px;
color: ${props => props.theme.text.secondary};
`;

const PageContainer = styled.div`
height: 100%;
position: relative;
max-height: 300px;
overflow-y: scroll;
overscroll-behavior: none;
margin: -15px;
padding: 0 15px;
color: ${props => props.theme.text.primary};
`;

const DevContainer = styled.div`
background: ${props => props.theme.gradient.green};
color: #fff;
text-align: center;
padding: 15px;
margin: -15px;
`;

const ActionsContainer = styled.div`
position: relative;
height: 40px;
`;

const AdapterTags = styled.div`
display: flex;
overflow: hidden;
flex-wrap: wrap;
`;

const Actions = styled.div`
position: absolute;
right: 0;
`;

export default AdapterModal;
