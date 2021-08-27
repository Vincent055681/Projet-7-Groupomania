import './styles/settings.scss';
import React from "react"
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom"
import Login from "./pages/Login"
import NewsFeed from './pages/NewsFeed';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={NewsFeed} />
        <Route exact path="/connexion" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
