import * as React from 'react';
import styled from 'styled-components';
import Separator from '../Separator';

class AdapterSettings extends React.Component {
    render() {
        let preferenceSchema = this.props.adapter.preferenceSchema;
        let preferences = Object.keys(preferenceSchema);

        let items = preferences.map(key => { return { key, ...preferences[key] } })
            .map(pref => {
                switch(pref.type) {
                    case 'text':
                    return <input type="text" />

                    case 'switch':
                    return <Switch title={pref.friendlyName} subtitle={pref.description} onChange={} />
                }
            });
        
        return (
            <>
                {items.map((item, index) => {
                    return (<>
                        { item }
                        { index == items.length && <Separator /> }
                    </>);
                })}
            </>
        );
    }
}



export default AdapterSettings;
