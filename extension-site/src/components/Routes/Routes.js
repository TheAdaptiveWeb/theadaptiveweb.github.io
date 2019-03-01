import * as React from 'react';
import { Pager } from '..';
import { AdapterPage, HelpPage, SettingsPage, InfoPage } from '../../views';
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { AppContext } from '../../context';

class Routes extends React.Component {
    render() {
        return (
            <AppContext.Consumer>
                {({ globalOptions }) => (
                    <Route render={({location}) => (
                        <TransitionGroup>
                            <CSSTransition key={globalOptions.animations && location.pathname.split('/')[1]} classNames="fade" timeout={550}>
                            <Switch location={location}>
                                <Route path="/adapters" component={() => <Pager><AdapterPage /></Pager>}/>
                                <Route path="/help" component={() => <Pager><HelpPage /></Pager>}/>
                                <Route path="/settings" component={props => <Pager><SettingsPage /></Pager>}/>
                                <Route path="/info" component={() => <Pager><InfoPage /></Pager>}/>
                            </Switch>
                            </CSSTransition>
                        </TransitionGroup>
                    )} />
                )}
            </AppContext.Consumer>
        );
    }
}

export default Routes;