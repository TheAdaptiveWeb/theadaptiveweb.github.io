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
        return (<AppContext.Consumer>
            {({ installedAdapters, adapters, developerAdapters, globalOptions }) => {
                return (
            <Page title="Adapters" subtitle="Install and configure adapters from this page. Select an adapter for more info.">
                <Route path="/adapters/:id" render={(props) => {
                    let adapter = [...installedAdapters, ...adapters, ...developerAdapters].find(x => x.id === props.match.params.id);
                    if (adapter === undefined) return (<div></div>);
                    return (
                        <AdapterModal adapter={adapter} />
                    );
                }}/>
                {globalOptions.developerMode && (
                    <Section title="Developer adapters">
                        <CardList>
                            {developerAdapters.length === 0
                            ? <div>No developer adapters installed</div>
                            : developerAdapters.map(adapter => {
                                return <AdapterCard key={'adapter-' + adapter.id} adapter={adapter} /> })}
                        </CardList>
                    </Section>
                )}
                <Section title="Installed">
                    <CardList>
                        {installedAdapters.length === 0
                            ? <div>No adapters installed</div>
                            : installedAdapters.map(adapter => {
                                return <AdapterCard key={'adapter-' + adapter.id} adapter={adapter} /> })}
                    </CardList>
                </Section>
                <Section title="Available">
                    <CardList>
                        {Object.keys(adapters).map(k => adapters[k]).map(adapter => <AdapterCard key={'adapter-' + adapter.id} adapter={adapter} />)}
                    </CardList>
                </Section>
            </Page>
            )}}
        </AppContext.Consumer>);
    }
}

export default AdapterPage;
