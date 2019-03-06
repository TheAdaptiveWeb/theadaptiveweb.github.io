import * as React from 'react';

import { Page, Section, Card } from '../../components';

class InfoPage extends React.Component {
    render() {
        return (<Page title="Info">
            <Section>
                <Card>
                    The Adaptive Web is a plugin that adds enhancements and fixes problems with web pages. This makes websites more accessible, and adapts them to suit your needs.
                </Card>
            </Section>
        </Page>);
    }
}

export default InfoPage;
