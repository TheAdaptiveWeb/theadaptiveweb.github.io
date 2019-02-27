import React, { Component } from 'react';
import './App.css';
import { Sidebar, Pager } from './components';
import { HashRouter as Router, Route } from 'react-router-dom';
import PreloadLogo from './components/PreloadLogo';
import { AdapterPage, HelpPage, SettingsPage, InfoPage } from './views';

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Sidebar />
          <Pager>
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
          </Pager>
        </>
      </Router>
    );
  }
}

export default App;
