import * as React from 'react';
import Separator from '../Separator';
import { AppContext } from '../../context';
import Switch from '../Switch';

class AdapterSettings extends React.Component {
    render() {
        let preferenceSchema = this.props.schema;
        let preferences = Object.keys(preferenceSchema);

        let items = preferences
            .map(key => { return { key, ...preferences[key] } })
            .map(pref => {
                switch(pref.type) {
                    case 'text':
                    return <input type="text" />

                    case 'switch':
                    return <Switch title={pref.friendlyName} subtitle={pref.description} />

                    default: return <></>;
                }
            });
        
        return (
            <AppContext.Consumer>
                { ({ setGlobal }) => {
                    return <>
                    {items.map((item, index) => {
                        return (<>
                            { item }
                            { index !== items.length && <Separator /> }
                        </>);
                    })}
                    </>;
                } }
                
            </AppContext.Consumer>
        );
    }
}

export default AdapterSettings;