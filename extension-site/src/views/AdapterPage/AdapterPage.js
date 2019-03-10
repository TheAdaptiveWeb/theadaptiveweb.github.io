import * as React from 'react';

import { Section, AdapterCard, Page, CardList, AdapterModal } from '../../components';
import { Route } from 'react-router-dom';
import { AppContext } from '../../context';

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

        let available = adapters.filter(x => installedAdapters.indexOf(x.id) === -1);

        return (<AppContext.Consumer>
            {({ installedAdapters }) => (
            <Page title="Adapters" subtile="Install and configure adapters from this page. Select an adapter for more info.">
                <Route path="/adapters/:id" component={AdapterModal} render={(props) => {
                    let adapter = installedAdapters.find(x => x.id === props.match.params.id);
                    if (adapter === undefined) return (<div></div>);
                    let { title, subtitle, tags, developer } = adapter;
                    return (
                        <AdapterModal title={title} subtitle={subtitle} tags={tags} developer={developer} />
                    );
                }}/>
                <Section title="Installed">
                    <CardList>
                        {installedAdapters.map(adapter => <AdapterCard key={adapter.uuid} title={adapter.name} subtitle={adapter.description} tags={adapter.tags} link={"/adapters/" + adapter.uuid} />)}
                    </CardList>
                </Section>
                <Section title="Available">
                    <CardList>
                        {available.map(adapter => <AdapterCard key={adapter.id} title={adapter.title} subtitle={adapter.subtitle} tags={adapter.tags} link={"/adapters/" + adapter.id} />)}
                    </CardList>
                </Section>
            </Page>
            )}
        </AppContext.Consumer>);
    }
}

export default AdapterPage;
