import * as React from 'react';

import { Section, AdapterCard } from '../../components';

class AdapterPage extends React.Component {
    render() {
        let tags = ['vision', 'test', 'test2'];
        return (<>
            <Section title="Installed">
                <AdapterCard title="Video Audio Description" subtitle="Spoken audio description for web videos." tags={tags} />
            </Section>
            <Section title="Available">
                <AdapterCard title="Video Audio Description" subtitle="Spoken audio description for web videos." tags={tags} />
            </Section>
        </>);
    }
}

export default AdapterPage;
