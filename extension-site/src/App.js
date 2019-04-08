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
import React, { Component } from 'react';
import { Sidebar, Routes, AnimatedLogo } from './components';
import { HashRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import { css, keyframes, ThemeProvider, createGlobalStyle } from 'styled-components';
import { Themes, AppContext } from './context';
import { default as PluginCommunicator } from './api/PluginCommunicator';
import * as adapterRegistry from '@adaptiveweb/registry';
import * as semver from 'semver';

const defaultOptions = {
  theme: 'light',
  animations: true,
  developerMode: false,
  autoReload: true,
};

class App extends Component {
  constructor(props) {
    super(props);

    let adapters = {};
    adapterRegistry.forEach(a => {
      adapters[a.id] = a;
    });

    this.state = {
      config: defaultOptions,
      adapters,
      installedAdapters: [],
      developerAdapters: [],
    };

    this.conn = new PluginCommunicator((installedAdapters) => {
        let filteredAdapters = [];

        // Check for and install updates
        installedAdapters.forEach(adapter => {
          if (this.state.adapters[adapter.id] !== undefined && semver.gt(this.state.adapters[adapter.id].version, adapter.version)) {
            this.conn.installAdapter(this.state.adapters[adapter.id]);
            filteredAdapters.push(this.state.adapters[adapter.id]);
          } else {
            filteredAdapters.push(adapter);
          }
        });
        
        // Set the adapters
        this.setState({
          installedAdapters: filteredAdapters
        });
      this.setState({ installedAdapters })
    }, (developerAdapters) => {
      this.setState({ developerAdapters: developerAdapters || [] });
    });
  }

  componentDidMount() {
    this.conn.sendMessage('getGlobalOptions').then(state => {
      if (state === undefined) {
        this.conn.setGlobalOptions(defaultOptions);
        return;
      } else this.updateGlobalOptions(state);
    });

    this.conn.requestAdapters();
  }

  updateGlobalOptions(state) {
    if (state === undefined || state === null) return;
    let newState = this.state.config;
    Object.keys(state).forEach(k => { newState[k] = state[k]; });
    this.setState({ config: newState }, () => {
      this.conn.setGlobalOptions(this.state.config);
    });
  }

  removeAdapter(adapterId, developer = false) {
    this.conn.removeAdapter(adapterId);
    if (developer) {
      this.setState({
        developerAdapters: this.state.developerAdapters.filter(x => x.id !== adapterId)
      })
    }
  }

  render() {
    return (
      <AppContext.Provider value={{ 
        globalOptions: this.state.config, 
        updateGlobalOptions: this.updateGlobalOptions.bind(this), 
        installedAdapters: this.state.installedAdapters,
        developerAdapters: this.state.developerAdapters,
        adapters: this.state.adapters,
        installAdapter: this.conn.installAdapter.bind(this.conn), 
        removeAdapter: this.removeAdapter.bind(this),
        getAdapterPreferences: this.conn.getAdapterPreferences.bind(this.conn), 
        updateAdapterPreferences: this.conn.updateAdapterPreferences.bind(this.conn),
         }}>

        <ThemeProvider theme={Themes[this.state.config.theme].theme}>
          <>
          <GlobalStyle />
          <Router>
            <>
              <AnimatedLogo />
              <Sidebar />
              <PageContainer globalOptions={this.state.config}>
                <Routes />
              </PageContainer>
            </>
          </Router>
          </>
        </ThemeProvider>
      </AppContext.Provider>
    );
  }
}

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Nunito');

body {
  margin: 0;
  padding: 0;
  font-family: 'Nunito', sans-serif;

  background-color: ${props => props.theme.background};
  overscroll-behavior: none;
}

.fade-enter {
  opacity: 0;
  z-index: 1;
}

.fade-enter.fade-enter-active {
  opacity: 1;
  transition: opacity 500ms ease-in-out;
}

.fade-exit {
  opacity: 0;
  z-index: 1;
}

a {
  color: ${props => props.theme.link.default}
}

a:visited {
  color: ${props => props.theme.link.visited}
}
`;

const introFrames = keyframes`
0% {
  opacity: 0;
}
50% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;

const PageContainer = styled.div`
position: absolute;
top: 0;
left: 400px;
right: 0;
bottom: 0;
${props => props.globalOptions.animations && css`animation: ${introFrames} 2s ease-in-out;`} 
`;

export default App;
