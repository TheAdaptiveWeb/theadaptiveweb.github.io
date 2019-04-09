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
import React from 'react';

class PreferenceProvider extends React.Component {
	constructor(props) {
		super(props);

		let defaultPreferences = {};
		this.props.adapter.preferenceSchema &&
			Object.keys(this.props.adapter.preferenceSchema).forEach(k => {
				defaultPreferences[k] = this.props.adapter.preferenceSchema[k].default;
			});

		this.state = {
			preferences: defaultPreferences
		};

		this.props
			.getAdapterPreferences(this.props.adapter.id)
			.then(preferences => {
				this.setState({ preferences: preferences || defaultPreferences });
			});
	}

	updatePreference(key, value) {
		this.props.updateAdapterPreferences(this.props.adapter.id, {
			[key]: value
		});
		let prefs = this.state.preferences;
		prefs[key] = value;
		this.setState({ preferences: prefs });
	}

	render() {
		return (
			<>
				{React.cloneElement(this.props.children, {
					preferences: this.state.preferences,
					updatePreference: (key, value) => this.updatePreference(key, value)
				})}
			</>
		);
	}
}

export default PreferenceProvider;
