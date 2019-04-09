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
import styled from 'styled-components';
import Separator from '../Separator';
import Switch from '../Switch';
import { TextField } from '..';

class AdapterSettings extends React.Component {
	render() {
		let preferenceSchema = this.props.schema;
		let preferences = Object.keys(preferenceSchema);
		let preferenceValues = this.props.values;

		let items = preferences
			.map(key => { return { key, ...preferenceSchema[key] }; })
			.map(pref => {
				switch(pref.type) {
				case 'text':
					return <TextField key={pref.key} title={pref.friendlyName} subtitle={pref.description} onChange={(newValue) => this.props.onChange(pref.key, newValue)} value={preferenceValues[pref.key]}  />;

				case 'switch':
					return <Switch key={pref.key} title={pref.friendlyName} subtitle={pref.description} onChange={(newValue) => this.props.onChange(pref.key, newValue)} checked={preferenceValues[pref.key]} />;

				default: return <></>;
				}
			});

		return (
			<AdapterSettingsDiv>
				{items.map((item, index) => {
					return (<div key={'settings-container-'+index}>
						{ item }
						{ index !== (items.length - 1) && <Separator /> }
					</div>);
				})}
			</AdapterSettingsDiv>
		);
	}
}

const AdapterSettingsDiv = styled.div`
margin: 15px 0;
`;

export default AdapterSettings;