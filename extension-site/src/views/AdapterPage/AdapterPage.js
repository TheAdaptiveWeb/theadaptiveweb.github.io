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

        return (<AppContext.Consumer>
            {({ installedAdapters, globalOptions }) => {
                return (
            <Page title="Adapters" subtile="Install and configure adapters from this page. Select an adapter for more info.">
                <Route path="/adapters/:id" render={(props) => {
                    console.log(installedAdapters);
                    let adapter = installedAdapters.find(x => x.id === props.match.params.id);
                    if (adapter === undefined) return (<div></div>);
                    return (
                        <AdapterModal adapter={adapter} />
                    );
                }}/>
                {globalOptions.developerMode && (
                    <Section title="Developer adapters">
                        <CardList>
                            {installedAdapters.filter(adapter => adapter.developer).map(adapter => {
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
                        {installedAdapters.map(adapter => <AdapterCard key={'adapter-' + adapter.id} adapter={adapter} />)}
                    </CardList>
                </Section>
            </Page>
            )}}
        </AppContext.Consumer>);
    }
}

export default AdapterPage;
