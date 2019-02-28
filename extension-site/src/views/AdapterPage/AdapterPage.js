import * as React from 'react';

import { Section, AdapterCard, Page, CardList, Modal, AdapterTag } from '../../components';
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';

class AdapterPage extends React.Component {
    render() {
        // Mocking only - should occur in constructor
        let subtitle = 'Spoken audio description for web videos.';
        let adapters = [];
        for (let i = 1; i < 22; i++) adapters.push({ 
            id: `adapter${i}`, 
            title: `Adapter ${i}`, 
            subtitle, 
            tags: [ `tag${i}`, `tag${i+1}`, `tag${i+2}` ] });
        let installedAdapters = [];
        for (let i = 1; i < 7; i++) installedAdapters.push(`adapter${i}`);

        let installed = adapters.filter(x => installedAdapters.indexOf(x.id) !== -1);
        let available = adapters.filter(x => installedAdapters.indexOf(x.id) === -1);

        return (<Page title="Adapters" subtitle="Install and configure adapters from this page. Select an adapter for more info.">
            <Route path="/adapters/:id" render={(props) => {
                let { title, subtitle, tags } = adapters.find(x => x.id == props.match.params.id);
                return (
                    <Modal>
                        <Title>{title}</Title>
                        <Subtitle>{subtitle}</Subtitle>
                        {tags.map((tag, index) => <AdapterTag key={`label-${index}`} label={tag} startColor="#9277EE" endColor="#874AE2" />)}
                    </Modal>
                );
            }}/>
            <Section title="Installed">
                <CardList>
                    {installed.map(adapter => <AdapterCard title={adapter.title} subtitle={adapter.subtitle} tags={adapter.tags} link={"/adapters/" + adapter.id} />)}
                </CardList>
            </Section>
            <Section title="Available">
                <CardList>
                    {available.map(adapter => <AdapterCard title={adapter.title} subtitle={adapter.subtitle} tags={adapter.tags} link={"/adapters/" + adapter.id} />)}
                </CardList>
            </Section>
        </Page>);
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

export default AdapterPage;
