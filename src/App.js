import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.less';
import About from './views/About';
import PageNotFound from './views/PageNotFound';
import Portfolio from './views/Portfolio';
import Professional from './views/Professional';

export default function App() {
  return (
    <Router>
      <div className="nav">
        <Link className="name pointer nav-link" to="/">PETE OWNBY</Link>
        <div className="links">
          <Link className="pointer nav-link" to="/professional">PROFESSIONAL PROJECTS</Link>
          <Link className="pointer nav-link" to="/portfolio">PORTFOLIO</Link>
          <Link className="pointer nav-link" to="/">ABOUT</Link>
        </div>
      </div>
      <div className="content">
        <Switch>
          <Route path="/page-not-found">
            <PageNotFound />
          </Route>
          <Route path="/professional">
            <Professional />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}