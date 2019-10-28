import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import Header from './components/Header';
import MainView from './modules/main/MainView';
import AboutView from './About';
import OrgView from './modules/org/OrgView';
import RepoView from './modules/repo/RepoView';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className="container pt-3">
          <Switch>
            <Route path="/about" component={AboutView} />
            <Route path="/org/:orgName/repos/:repoName/commits" component={RepoView} />
            <Route path="/org/:orgName" component={OrgView} />
            <Route path="/" component={MainView} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
