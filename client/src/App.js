import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch.jsx";
import Article from "./pages/SavedArticles.jsx";
import Home from "./pages/Home.jsx";
import Nav from "./components/Nav";

const App = () => {
  return (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} /> 
        <Route exact path="/savedarticles" component={Article} /> 
        <Route component={NoMatch} /> 
      </Switch>
    </div>
  </Router>
  )
}

export default App;
