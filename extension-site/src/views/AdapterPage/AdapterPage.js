import * as React from 'react';

import { Section, AdapterCard, Page, CardList, Modal, AdapterTag } from '../../components';
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';

class AdapterPage extends React.Component {
    render() {
        let tags = ['vision', 'test', 'test2'];
        return (<Page title="Adapters" subtitle="Install and configure adapters from this page. Select an adapter for more info.">
            <Route path="/adapters/:id" render={(props) => {
                return (
                    <Modal>
                        <Title>Video Audio Description</Title>
                        <Subtitle>Spoken audio description for web videos.</Subtitle>
                        {tags.map((tag, index) => <AdapterTag key={`label-${index}`} label={tag} startColor="#9277EE" endColor="#874AE2" />)}
                    </Modal>
                );
            }}/>
            <Section title="Installed">
                <CardList>
                    <AdapterCard title="Video Audio Description" subtitle="Spoken audio description for web videos." tags={tags} link="/adapters/xyz" />
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

const Title = styled.div` 
font-size: 20px;
`;

const Subtitle = styled.div` 
font-size: 18px;
color: #4A4A4A;
`;

export default AdapterPage;
