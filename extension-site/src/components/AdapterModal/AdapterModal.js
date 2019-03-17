import * as React from 'react';
import { Modal, AdapterTag, Button } from '..';
import { Link } from 'react-router-dom';
import BackLink from '../BackLink';
import styled from 'styled-components';
import AdapterSettings from '../AdapterSettings';

class AdapterModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'description'
        };
    }

    setPage(newPage) {
        this.setState({
            page: newPage
        });
    }

    render() {
        let head = [
            (<div>
                <Link to="/adapters"><BackLink>Back to Adapters</BackLink></Link>
                <Title>{this.props.adapter.name}</Title>
                <Subtitle>{this.props.adapter.subtitle}</Subtitle>
                {this.props.adapter.tags.map((tag, index) => <AdapterTag key={`label-${index}`} label={tag} startColor="#9277EE" endColor="#874AE2" />)}
            </div>),
        ];
        
        if (this.props.adapter.developer) head.push(<DevContainer>Developer mode: Detach this adapter using `awcli detach`</DevContainer>);

        return (
            <Modal>
                {head}
                <PageContainer>
                    { this.state.page === 'description'
                      ? this.props.adapter.description
                      : <AdapterSettings schema={this.props.adapter.preferenceSchema} /> }
                </PageContainer>
                <ActionsContainer>
                    <Actions>
                    <Button onClick={() => this.setPage(this.state.page === 'description' ? 'settings' : 'description')}>
                        {this.state.page === 'description' ? 'settings' : 'description'}
                    </Button>
                    <Button type="danger">Disable</Button>
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
margin: -15px;
padding: 15px;
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

const Actions = styled.div`
position: absolute;
right: 0;
`;

export default AdapterModal;
