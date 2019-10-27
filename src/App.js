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
import Org from './modules/org/Org';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className="container">
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/org/:name" component={Org} />
            <Route path="/" component={Main} />
          </Switch>  
        </div>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
