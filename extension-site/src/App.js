import React, { Component } from 'react';
import { Sidebar, Pager, Logo } from './components';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { AdapterPage, HelpPage, SettingsPage, InfoPage } from './views';
import styled from 'styled-components';
import { keyframes, ThemeProvider, createGlobalStyle } from 'styled-components';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Context, DarkTheme, DefaultTheme, HighContrastTheme } from './context';
import Routes from './components/Routes/Routes';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={DefaultTheme}>
        <>
        <GlobalStyle />
        <Routes />
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

let xOffset = (window.innerWidth / 2) - 200;
let yOffset = (window.innerHeight / 2) - 57;

const LogoAnimation = keyframes`
0% {
  transform: translate(${xOffset}px, ${yOffset}px) rotate(-360deg) scale(0);
}
50% {
  transform: translate(${xOffset}px, ${yOffset}px) rotate(0) scale(1);
}
100% {
  transform: translate(0, 0);
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

const LogoDiv = styled.div`
animation: ${LogoAnimation} 2s ease-in-out;
z-index: 1000;
position: fixed;
top: 20px;
left: 163px;
display: block;
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
