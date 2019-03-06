


import * as React from 'react';
import { Modal, AdapterTag, Button } from '..';
import { Link } from 'react-router-dom';
import BackLink from '../BackLink';
import styled from 'styled-components';

class AdapterModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'description',
            pages: {
                description: 'Description',
                settings: 'Settings',
            }
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
                    <Link to="/adapters"><BackLink>Back to Adapters</BackLink></Link>
                    <Title>{this.props.title}</Title>
                    <Subtitle>{this.props.subtitle}</Subtitle>
                    {this.props.tags.map((tag, index) => <AdapterTag key={`label-${index}`} label={tag} startColor="#9277EE" endColor="#874AE2" />)}
                </div>
                <PageContainer>
                    {this.state.pages[this.state.page]}
                </PageContainer>
                <ActionsContainer>
                    <Actions>
                    <Button onClick={() => this.setPage(this.state.page === 'description' ? 'settings' : 'description')}>
                        {this.state.page === 'description' ? 'settings' : 'description'}
                    </Button>
                    <Button type="danger">Uninstall</Button>
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
max-height: 300px;
overflow-y: scroll;
overscroll-behavior: none;
margin: 0 -15px;
padding: 0 15px;
color: ${props => props.theme.text.primary};
`;

const ActionsContainer = styled.div`
position: relative;
height: 40px;
`;

const Actions = styled.div`
position: absolute;
right: 0;
`;

export default AdapterModal;
