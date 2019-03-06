import React, { Component } from 'react';
import { Sidebar, Routes, AnimatedLogo } from './components';
import { HashRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import { css, keyframes, ThemeProvider, createGlobalStyle } from 'styled-components';
import { Themes, AppContext } from './context';
import { getOptions, saveOptions } from './api/SettingsStorage';
import { default as PluginCommunicator } from './api/PluginCommunicator';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = getOptions() || {
      theme: 'light',
      animations: true,
    };

    let conn = new PluginCommunicator();
    conn.sendMessage('requestAdapters')
      .then(response => {
        console.log(response);
      }, err => {
        console.error(err);
      });

    conn.sendMessage('installAdapter', {
        "uuid": "test-adapter",
        "name": "Test adapter",
        "description": "Test adapter.",
        "version": "0.1.4",
        "script": "aw.request('http://localhost:3000').then(prefs => console.log(prefs), err => console.error(err));",
        "preferenceSchema": {
            "console_text": {
                "friendlyName": "Console Log",
                "description": "Text displayed",
                "type": "text",
                "default": "Hello, World!"
            }
        }
    }).then(response => {
      console.log(response);
    }, err => {
      console.error(err);
    });;
  }

  updateGlobalOptions(state) {
    this.setState(state, () => {
      saveOptions(this.state);
    });
  }

  render() {
    return (
      <AppContext.Provider value={{ globalOptions: this.state, updateGlobalOptions: this.updateGlobalOptions.bind(this) }}>
        <ThemeProvider theme={Themes[this.state.theme].theme}>
          <>
          <GlobalStyle />
          <Router>
            <>
              <AnimatedLogo />
              <Sidebar />
              <PageContainer globalOptions={this.state}>
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
