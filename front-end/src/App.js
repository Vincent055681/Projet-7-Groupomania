import './styles/settings.scss';
import React from "react"
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom"
import Login from "./pages/Login"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/connexion" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
