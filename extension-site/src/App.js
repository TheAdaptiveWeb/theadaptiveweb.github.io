import React, { Component } from 'react';
import './App.css';
import { Sidebar, Pager, Logo } from './components';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { AdapterPage, HelpPage, SettingsPage, InfoPage } from './views';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Context, DarkTheme } from './context';

class App extends Component {
  render() {
    return (
      <Context.Provider value={{
        theme: DarkTheme
      }}>
        <Router>
          <>
            <LogoDiv>
              <Logo />
            </LogoDiv>
            <Sidebar />
            <PageContainer>
              <Route render={({location}) => (
                <TransitionGroup>
                  <CSSTransition key={location.pathname.split('/')[1]} classNames="fade" timeout={550}>
                    <Switch location={location}>
                      <Route path="/adapters" component={(props) => {
                        return <Pager><AdapterPage /></Pager>
                      }}/>
                      <Route path="/help" component={(props) => {
                        return <Pager><HelpPage /></Pager>
                      }}/>
                      <Route path="/settings" component={(props) => {
                        return <Pager><SettingsPage /></Pager>
                      }}/>
                      <Route path="/info" component={(props) => {
                        return <Pager><InfoPage /></Pager>
                      }}/>
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              )} />
            </PageContainer>
          </>
        </Router>
      </Context.Provider>
    );
  }
}

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
