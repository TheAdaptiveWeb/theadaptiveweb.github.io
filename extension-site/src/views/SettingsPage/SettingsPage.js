import * as React from 'react';

import { Page, Section, Card, ThemeSwitcher } from '../../components';
import { AppContext } from '../../context';
import styled from 'styled-components';

class SettingsPage extends React.Component {
    render() {
        return (
            <Page title="Settings" subtitle="Configure global settings here. Settings for each adapter can be changed on the Adapters page.">
                <Section title="Appearance">
                    <Card>
                        <Subsection>
                            <SubsectionTitle>Themes</SubsectionTitle>
                            <ThemeSwitcher />
                        </Subsection>
                        
                        <Subsection>
                            <SubsectionTitle>Animations</SubsectionTitle>
                        </Subsection>
                    </Card>
                </Section>
            </Page>
        );
    }
}

const Subsection = styled.div`
margin-bottom: 20px;
`;

const SubsectionTitle = styled.div`
font-size: 21px;
margin-bottom: 10px;
color: ${props => props.theme.text.primary};
`;

export default SettingsPage;
