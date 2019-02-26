import React, { Component } from 'react';
import './App.css';
import { Sidebar, Pager } from './components';
import { HashRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Sidebar />
          <Pager>
            <Route path="/adapters" component={(props) => {
              return <p>Adapters</p>
            }}/>
            <Route path="/help" component={(props) => {
              return <p>Help</p>
            }}/>
            <Route path="/settings" component={(props) => {
              return <p>Settings</p>
            }}/>
            <Route path="/info" component={(props) => {
              return <p>Info</p>
            }}/>
          </Pager>
          
        </>
      </Router>
    );
  }
}

export default App;
