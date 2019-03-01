


import * as React from 'react';
import { Modal, AdapterTag } from '..';
import { Link } from 'react-router-dom';
import BackLink from '../BackLink';
import styled from 'styled-components';

class AdapterModal extends React.Component {
    render() {
        return (
            <Modal>
                <Link to="/adapters">
                    <BackLink>Back to Adapters</BackLink>
                </Link>
                <Title>{this.props.title}</Title>
                <Subtitle>{this.props.subtitle}</Subtitle>
                {this.props.tags.map((tag, index) => <AdapterTag key={`label-${index}`} label={this.props.tag} startColor="#9277EE" endColor="#874AE2" />)}
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

export default AdapterModal;
