import React, { Component } from 'react';
import { Sidebar, Routes, AnimatedLogo } from './components';
import { HashRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import { keyframes, ThemeProvider, createGlobalStyle } from 'styled-components';
import { Context, DarkTheme, DefaultTheme, HighContrastTheme } from './context';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={DefaultTheme}>
        <>
        <GlobalStyle />
        <Router>
          <>
            <AnimatedLogo />
            <Sidebar />
            <PageContainer>
              <Routes />
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
animation: ${introFrames} 2s ease-in-out;
`;

export default App;
