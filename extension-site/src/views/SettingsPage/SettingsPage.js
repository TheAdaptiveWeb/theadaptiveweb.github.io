import * as React from 'react';

import { Page, Section, Card, ThemeSwitcher } from '../../components';
import { AppContext } from '../../context';

class SettingsPage extends React.Component {
    render() {
        return (
            <Page title="Settings" subtitle="Configure global settings here. Settings for each adapter can be changed on the Adapters page.">
                <Section title="Themes">
                    <Card>
                        <ThemeSwitcher />
                    </Card>
                </Section>
            </Page>
        );
    }
}

export default SettingsPage;
