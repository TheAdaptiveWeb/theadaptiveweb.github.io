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
import InfoCard from '../../components/InfoCard';
import PreferenceProvider from '../../components/PreferenceProvider';

class AdapterPage extends React.Component {
	render() {
		return (<AppContext.Consumer>
			{({ installedAdapters, adapters, developerAdapters, globalOptions, installAdapter, removeAdapter, getAdapterPreferences, updateAdapterPreferences }) => {
				return (
					<Page title="Adapters" subtitle="Install and configure adapters from this page. Select an adapter for more info.">
						<Route path="/adapters/:id" render={(props) => {
							let adapter = adapters[props.match.params.id] || developerAdapters.find(x => x.id === props.match.params.id);
							if (adapter === undefined) return (<div></div>);

							let installed = adapter.developer || installedAdapters.find(x => x.id === adapter.id) !== undefined;

							return (
								<PreferenceProvider
									getAdapterPreferences={getAdapterPreferences}
									adapter={adapter}
									updateAdapterPreferences={updateAdapterPreferences}>
									<AdapterModal 
										installed={installed} 
										adapter={adapter}
										installAdapter={installAdapter}
										removeAdapter={removeAdapter} />
								</PreferenceProvider>
							);
						}}/>
						{globalOptions.developerMode && (
							<Section title="Developer adapters">
								{developerAdapters.length === 0
									? <InfoCard>No developer adapters are active. Use awcli to debug adapters. <a href="https://docs.adaptiveweb.io/developing/getting-started">Visit the developer documentation for more info</a></InfoCard>
									: <CardList>
										{developerAdapters.map(adapter => {
											return <AdapterCard key={'adapter-' + adapter.id} adapter={adapter} />; })}
									</CardList>}
							</Section>
						)}
						<Section title="Installed">
							{installedAdapters.filter(x => adapters[x.id] !== undefined && !x.developer).length === 0
								? <InfoCard>No adapters are installed. Install them from the list of available adapters below.</InfoCard>
								: <CardList>
									{installedAdapters.filter(x => adapters[x.id] !== undefined && !x.developer).map(adapter => {
										return <AdapterCard key={'adapter-' + adapter.id} adapter={adapter} />; })}
								</CardList>}
                    
                    
						</Section>
						<Section title="Available">
							<CardList>
								{Object.keys(adapters).map(k => adapters[k]).map(adapter => <AdapterCard key={'adapter-' + adapter.id} adapter={adapter} />)}
							</CardList>
						</Section>
					</Page>
				);}}
		</AppContext.Consumer>);
	}
}

export default AdapterPage;
