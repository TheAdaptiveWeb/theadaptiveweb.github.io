import React, { Component } from 'react';
import './App.css';
import { Sidebar, Pager, Logo } from './components';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { AdapterPage, HelpPage, SettingsPage, InfoPage } from './views';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { TransitionGroup, CSSTransition } from "react-transition-group";

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <LogoDiv>
            <Logo />
          </LogoDiv>
          <Sidebar />
          <Route render={({location}) => (
            <Pager>
              <TransitionGroup>
                <CSSTransition key={location.key} classNames="fade" timeout={550}>
                  <Switch location={location}>
                    <Route path="/adapters" component={(props) => {
                      return <AdapterPage />
                    }}/>
                    <Route path="/help" component={(props) => {
                      return <HelpPage />
                    }}/>
                    <Route path="/settings" component={(props) => {
                      return <SettingsPage />
                    }}/>
                    <Route path="/info" component={(props) => {
                      return <InfoPage />
                    }}/>
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </Pager>
          )} />
        </>
      </Router>
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

const LogoDiv = styled.div`
animation: ${LogoAnimation} 2s ease-in-out;
z-index: 1000;
position: fixed;
top: 20px;
left: 163px;
`;

export default App;
