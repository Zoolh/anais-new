import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import addPrestation from "./components/prestation-components/createPrestation";
import listePrestation from "./components/prestation-components/listePrestation";
// import Tutorial from "./components/Tutorial";

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/addPrestation" className="navbar-brand">
            ANAIS L.
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/listePrestations"} className="nav-link">
                Liste Prestations
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Ajouter
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/listePrestations"]} component={listePrestation} />
            <Route exact path="/add" component={addPrestation} />
            {/* <Route path="/tutorials/:id" component={Tutorial} /> */}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
