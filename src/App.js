import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import Header from './components/Header';
import MainPage from './modules/main/MainPage';
import AboutPage from './About';
import OrgPage from './modules/org/OrgPage';
import RepoPage from './modules/repo/RepoPage';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className="container pt-3">
          <Switch>
            <Route path="/about" component={AboutPage} />
            <Route path="/org/:orgName/repos/:repoName/commits" component={RepoPage} />
            <Route path="/org/:orgName" component={OrgPage} />
            <Route path="/" component={MainPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
