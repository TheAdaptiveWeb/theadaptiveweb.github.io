import * as React from 'react';

import { Section, AdapterCard, Page, CardList, Modal } from '../../components';
import { Route } from 'react-router-dom';

class AdapterPage extends React.Component {
    render() {
        let tags = ['vision', 'test', 'test2'];
        return (<Page title="Adapters" subtitle="Install and configure adapters from this page. Select an adapter for more info.">
            <Route path="/adapters/:id" component={(props) => {
              return <Modal>{props.match.params.id}</Modal>
            }}/>
            <Section title="Installed">
                <CardList>
                    <AdapterCard title="Video Audio Description" subtitle="Spoken audio description for web videos." tags={tags} />
                    <AdapterCard title="Video Audio Description" subtitle="Spoken audio description for web videos." tags={tags} />
                    <AdapterCard title="Video Audio Description" subtitle="Spoken audio description for web videos." tags={tags} />
                    <AdapterCard title="Video Audio Description" subtitle="Spoken audio description for web videos." tags={tags} />
                    <AdapterCard title="Video Audio Description" subtitle="Spoken audio description for web videos." tags={tags} />
                    <AdapterCard title="Video Audio Description" subtitle="Spoken audio description for web videos." tags={tags} />
                </CardList>
            </Section>
            <Section title="Available">
                <CardList>
                    <AdapterCard title="Video Audio Description" subtitle="Spoken audio description for web videos." tags={tags} />
                    <AdapterCard title="Video Audio Description" subtitle="Spoken audio description for web videos." tags={tags} />
                    <AdapterCard title="Video Audio Description" subtitle="Spoken audio description for web videos." tags={tags} />
                    <AdapterCard title="Video Audio Description" subtitle="Spoken audio description for web videos." tags={tags} />
                    <AdapterCard title="Video Audio Description" subtitle="Spoken audio description for web videos." tags={tags} />
                    <AdapterCard title="Video Audio Description" subtitle="Spoken audio description for web videos." tags={tags} />
                    <AdapterCard title="Video Audio Description" subtitle="Spoken audio description for web videos." tags={tags} />
                    <AdapterCard title="Video Audio Description" subtitle="Spoken audio description for web videos." tags={tags} />
                    <AdapterCard title="Video Audio Description" subtitle="Spoken audio description for web videos." tags={tags} />
                    <AdapterCard title="Video Audio Description" subtitle="Spoken audio description for web videos." tags={tags} />
                    <AdapterCard title="Video Audio Description" subtitle="Spoken audio description for web videos." tags={tags} />
                    <AdapterCard title="Video Audio Description" subtitle="Spoken audio description for web videos." tags={tags} />
                </CardList>
            </Section>
        </Page>);
    }
}

export default AdapterPage;
