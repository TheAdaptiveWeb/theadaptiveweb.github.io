import * as React from 'react';

import { Section, AdapterCard, Page, CardList, AdapterModal } from '../../components';
import { Route } from 'react-router-dom';

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
                    <AdapterModal title={title} subtitle={subtitle} tags={tags} />
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

export default AdapterPage;
