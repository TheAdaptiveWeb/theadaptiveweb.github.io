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

import { Page, Section, Card } from '../../components';

class InfoPage extends React.Component {
    render() {
        return (<Page title="Info">
            <Section>
                <Card>
                    <div>The Adaptive Web is a plugin that adds enhancements and fixes problems with web pages. This makes websites more accessible, and adapts them to suit your needs.

                    <br /><br />

                    This project was created as part of a final year research project by <a href="https://ahirst.com">Adam Hirst</a> at <a href="https://dundee.ac.uk">the University of Dundee</a>
                    </div>
                </Card>
            </Section>

            <Section title="Contributors">
                <Card>
                    <div>
                    The Adaptive Web remains free through the contribution of it's open source contributors. Please consider helping the platform grow by <a href="https://github.com/TheAdaptiveWeb">contributing on GitHub</a>.
                    </div>

                </Card>
            </Section>
        </Page>);
    }
}

export default InfoPage;
