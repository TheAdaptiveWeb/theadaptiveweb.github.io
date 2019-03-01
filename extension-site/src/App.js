import React, { Component } from 'react';
import { Sidebar, Routes, AnimatedLogo } from './components';
import { HashRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import { css, keyframes, ThemeProvider, createGlobalStyle } from 'styled-components';
import { Themes } from './context';
import { getOptions, saveOptions } from './api/SettingsStorage';

class App extends Component {
  constructor(props) {
    super(props);

    console.log(getOptions());

    this.state = getOptions() || {
      theme: 'light',
      animations: true,
    };
  }

  updateGlobalOptions(state) {
    this.setState(state, () => {
      saveOptions(this.state);
    });
  }

  render() {
    return (
      <ThemeProvider theme={Themes[this.state.theme].theme}>
        <>
        <GlobalStyle />
        <Router>
          <>
            <AnimatedLogo globalOptions={this.state} />
            <Sidebar globalOptions={this.state} />
            <PageContainer globalOptions={this.state}>
              <Routes updateGlobalOptions={this.updateGlobalOptions.bind(this)} globalOptions={this.state} />
            </PageContainer>
          </>
        </Router>
        </>
      </ThemeProvider>
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
