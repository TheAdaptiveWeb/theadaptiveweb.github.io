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
            name: `Adapter ${i}`, 
            description: subtitle, 
            tags: [ `tag${i}`, `tag${i+1}`, `tag${i+2}` ] });
        let installedAdapters = [];
        for (let i = 1; i < 7; i++) installedAdapters.push(`adapter${i}`);

        let available = adapters.filter(x => installedAdapters.indexOf(x.id) === -1);

        return (<AppContext.Consumer>
            {({ installedAdapters, globalOptions }) => {
                console.log(globalOptions);
                return (
            <Page title="Adapters" subtile="Install and configure adapters from this page. Select an adapter for more info.">
                <Route path="/adapters/:id" render={(props) => {
                    let adapter = installedAdapters.find(x => x.uuid === props.match.params.id);
                    if (adapter === undefined) return (<div></div>);
                    return (
                        <AdapterModal adapter={adapter} />
                    );
                }}/>
                {globalOptions.developerMode && (
                    <Section title="Developer adapters">
                        <CardList>
                            {installedAdapters.filter(adapter => adapter.developer).map(adapter => {
                                adapter.id = adapter.uuid;  
                                return <AdapterCard key={'adapter-' + adapter.id} adapter={adapter} /> })}
                        </CardList>
                    </Section>
                )}
                <Section title="Installed">
                    <CardList>
                        {installedAdapters.filter(adapter => adapter.developer).map(adapter => <AdapterCard key={'adapter-' + adapter.id} adapter={adapter} />)}
                    </CardList>
                </Section>
                <Section title="Available">
                    <CardList>
                        {available.map(adapter => <AdapterCard adapter={adapter} />)}
                    </CardList>
                </Section>
            </Page>
            )}}
        </AppContext.Consumer>);
    }
}

export default AdapterPage;
