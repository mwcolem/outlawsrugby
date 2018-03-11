import React, { Component } from 'react';
import './App.css';
import Main from './components/Main'
import Home from './components/Home'
import { BrowserRouter, Route } from 'react-router-dom'
import Officers from './components/Officers';
import Announcements from './components/Announcements'
import Schedule from './components/Schedule'
import Events from './components/Events'
import Roster from './components/Roster'
import OldeBoys from './components/OldeBoys'
import Sevens from './components/Sevens'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route path="/" component={Main}/>
            <Route path="/home" component={Home}/>
            <Route path="/announcements" component={Announcements}/>
            <Route path="/schedule" component={Schedule}/>
            <Route path="/events" component={Events}/>
            <Route path="/officers" component={Officers}/>
            <Route path="/roster" component={Roster}/>
            <Route path="/oldeboys" component={OldeBoys}/>
            <Route path="/sevens" component={Sevens}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
