import './styles/settings.scss';
import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from "./pages/Login"
import NewsFeed from './pages/NewsFeed';
import EditProfil from './pages/EditProfil';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={NewsFeed} />
        <Route exact path="/connexion" component={Login} />
        <Route exact path="/editprofil" component={EditProfil} />
      </Switch>
    </Router>
  );
}

export default App;
