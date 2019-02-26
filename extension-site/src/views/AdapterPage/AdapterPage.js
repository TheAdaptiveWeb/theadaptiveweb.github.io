import * as React from 'react';

import { Section, AdapterCard, Page } from '../../components';

class AdapterPage extends React.Component {
    render() {
        let tags = ['vision', 'test', 'test2'];
        return (<Page title="Adapters" subtitle="Install and configure adapters from this page. Select an adapter for more info.">
            <Section title="Installed">
                <AdapterCard title="Video Audio Description" subtitle="Spoken audio description for web videos." tags={tags} />
            </Section>
            <Section title="Available">
                <AdapterCard title="Video Audio Description" subtitle="Spoken audio description for web videos." tags={tags} />
            </Section>
        </Page>);
    }
}

export default AdapterPage;
