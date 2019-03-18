import * as React from 'react';
import styled from 'styled-components';
import Separator from '../Separator';
import { AppContext } from '../../context';
import Switch from '../Switch';
import { TextField } from '..';

class AdapterSettings extends React.Component {
    render() {
        let preferenceSchema = this.props.schema;
        console.log(preferenceSchema);
        let preferences = Object.keys(preferenceSchema);

        let items = preferences
            .map(key => { return { key, ...preferenceSchema[key] } })
            .map(pref => {
                switch(pref.type) {
                    case 'text':
                    return <TextField key={pref.key} title={pref.friendlyName} subtitle={pref.description} />

                    case 'switch':
                    return <Switch key={pref.key} title={pref.friendlyName} subtitle={pref.description} />

                    default: return <></>;
                }
            });

        return (
            <AppContext.Consumer>
                { ({ setGlobal }) => {
                    return <AdapterSettingsDiv>
                    {items.map((item, index) => {
                        return (<>
                            { item }
                            { index !== (items.length - 1) && <Separator /> }
                        </>);
                    })}
                    </AdapterSettingsDiv>;
                } }
            </AppContext.Consumer>
        );
    }
}

const AdapterSettingsDiv = styled.div`
margin: 15px 0;
`;

export default AdapterSettings;