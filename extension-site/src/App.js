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
import { getOptions, saveOptions } from './api/SettingsStorage';
import { default as PluginCommunicator } from './api/PluginCommunicator';

const defaultOptions = {
  theme: 'light',
  animations: true,
  developerMode: false,
  autoReload: true,
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      config: defaultOptions,
      installedAdapters: []
    };

    this.conn = new PluginCommunicator();
  }

  componentDidMount() {
    this.updateGlobalOptions(getOptions());

    this.conn.sendMessage('getGlobalOptions').then(state => {
      if (state === undefined) {
        this.conn.sendMessage('setGlobalOptions', defaultOptions);
        this.updateGlobalOptions(state);
        return;
      } else this.updateGlobalOptions(state);
    });

    this.conn.sendMessage('requestAdapters')
      .then(response => Object.keys(response).map(key => response[key]))
      .then(response => {
        this.setState({
          installedAdapters: response
        });
        console.log(this.state.installedAdapters);
      }, err => {
        console.error(err);
      });
  }

  updateGlobalOptions(state) {
    if (state === undefined || state === null) return;
    let newState = this.state.config;
    Object.keys(state).forEach(k => { newState[k] = state[k]; });
    this.setState({ config: newState }, () => {
      saveOptions(this.state.config);
      this.conn.sendMessage('setGlobalOptions', this.state.config);
    });
  }

  render() {
    return (
      <AppContext.Provider value={{ 
        globalOptions: this.state.config, 
        updateGlobalOptions: this.updateGlobalOptions.bind(this), 
        installedAdapters: this.state.installedAdapters }}>

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
  text-decoration: none;
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
