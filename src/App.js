import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './modules/main/Main';
import About from './About';
import OrgsPage from './modules/org/OrgPage';
//TODO: Logic is not there
import BreadCrumb from './components/Breadcrumb';
import RepoPage from './modules/repo/RepoPage';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <BreadCrumb />
        <div className="container">
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/org/:orgName/repos/:repoName/commits" component={RepoPage} />
            <Route path="/org/:orgName" component={OrgsPage} />
            <Route path="/" component={Main} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
