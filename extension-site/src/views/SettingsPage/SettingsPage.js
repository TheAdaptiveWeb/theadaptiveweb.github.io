import * as React from 'react';

import { Page, Section, Card, ThemeSwitcher, Switch, Separator } from '../../components';
import { AppContext } from '../../context';
import styled from 'styled-components';

class SettingsPage extends React.Component {
    render() {
        return (
            <AppContext.Consumer>
                {({ globalOptions, updateGlobalOptions }) => (
                    <Page title="Settings" subtitle="Configure global settings here. Settings for each adapter can be changed on the Adapters page.">
                        <Section title="Appearance">
                            <Card>
                                <Subsection>
                                    <SubsectionTitle>Themes</SubsectionTitle>
                                    <ThemeSwitcher globalOptions={globalOptions} updateGlobalOptions={updateGlobalOptions} />
                                </Subsection>
                                
                                <Subsection>
                                    <SubsectionTitle>Animations</SubsectionTitle>
                                    <Switch title="Enable animations" subtitle="Enable/disable animations on this configuration site (enabled by default)." checked={globalOptions.animations} onChange={(newState) => { updateGlobalOptions({ animations: newState }) }} />
                                </Subsection>
                            </Card>
                        </Section>
                        <Section title="Developers">
                            <Card>
                                <Subsection>
                                    <SubsectionTitle>Developer mode</SubsectionTitle>
                                    <Switch title="Enable developer mode" subtitle="Developer mode provides tools for developers to build and test adapters before publishing them." checked={globalOptions.developerMode} onChange={(newState) => { updateGlobalOptions({ developerMode: newState }) }} />
                                    <Separator />
                                    <TogglableDiv disabled={!globalOptions.developerMode}>
                                        <Switch title="Automatic reload" subtitle="Automatically refresh the active browser tab when an extension is rebuilt from the awcli watcher." checked={globalOptions.autoReload} onChange={(newState) => { updateGlobalOptions({ autoReload: newState }) }} disabled={!globalOptions.developerMode} />
                                    </TogglableDiv>
                                </Subsection>
                            </Card>
                        </Section>
                    </Page>
                )}
            </AppContext.Consumer>
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

const TogglableDiv = styled.div`
${props => props.disabled && 'opacity: 0.5;'}
`;

export default SettingsPage;
