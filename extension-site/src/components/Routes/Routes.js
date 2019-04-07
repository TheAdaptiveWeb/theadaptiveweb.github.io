/**
 *  Copyright 2019 The Adaptive Web. All Rights Reserved.
 * 
 *  Licensed under the Mozilla Public License 2.0 (the "License"). 
 *  You may not use this file except in compliance with the License.
 *  A copy of the License is located at
 *  
 *      https://www.mozilla.org/en-US/MPL/2.0/
 *  
 *  or in the "license" file accompanying this file. This file is distributed 
 *  on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either 
 *  express or implied. See the License for the specific language governing 
 *  permissions and limitations under the License.
 */
import * as React from 'react';
import { Pager } from '..';
import { AdapterPage, SettingsPage, InfoPage } from '../../views';
import { Route, Switch, Redirect } from 'react-router-dom';
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
                                <Pager>
                                    <Route exact path="/" render={() => (
                                        <Redirect to="/adapters" />
                                    )} />
                                    <Route path="/adapters" component={AdapterPage}/>
                                    <Route path="/settings" component={SettingsPage}/>
                                    <Route path="/info" component={InfoPage}/>
                                </Pager>
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