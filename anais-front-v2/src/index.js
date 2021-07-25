import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";

import "assets/scss/material-kit-pro-react.scss?v=1.9.0";

// pages for this product
import LandingPage from "views/LandingPage/LandingPage.js";
import StylePage from "views/StylePage/StylePage.js";
import BeautePage from "views/BeautePage/BeautePage.js";
import PrestationsPage from "views/PrestationsPage/PrestationsPage";
import AProposPage from "views/APropos/AProposPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/style-page" component={StylePage} />
      <Route path="/beaute-page" component={BeautePage} />
      <Route path="/prestations-page" component={PrestationsPage} />
      <Route path="/a-propos-page" component={AProposPage} />
      <Route path="/" component={LandingPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
