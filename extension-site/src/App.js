import React, { Component } from 'react';
import './App.css';
import { Sidebar } from './components';
import { HashRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Sidebar />
          <Route path="/adapters" component={(props) => {
            return <p>Adapters</p>
          }}/>
        </>
      </Router>
    );
  }
}

export default App;
