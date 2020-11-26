/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import ListIcon from '@material-ui/icons/List';
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
// Component new
import ListePrestations from "views/Prestations/ListePrestations.js";
import CreatePrestation from "views/Prestations/CreatePrestation.js";
import CreateClient from "views/Clients/CreateClient";
import ListFormules from "views/Formules/ListFormule";
import CreateFormule from "views/Formules/CreateFormule";
import ListClients from "views/Clients/ListClients";


const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
    toShow : true
  },
  {
    path: "/prestations",
    name: "Prestations",
    icon: "content_paste",
    component: ListePrestations,
    layout: "/admin",
    toShow : true
  },
  {
    path: "/formules",
    name: "Fomules",
    icon: ListIcon,
    component: ListFormules,
    layout: "/admin",
    toShow : true
  },
  {
    path: "/clients",
    name: "Clients",
    icon: Person,
    component: ListClients,
    layout: "/admin",
    toShow : true
  },
  {
    path: "/creer-prestation",
    name: "Creer Prestation",
    icon: Person,
    component: CreatePrestation,
    layout: "/admin",
    toShow : false
  },
  {
    path: "/creer-formule",
    name: "Creer Formule",
    icon: Person,
    component: CreateFormule,
    layout: "/admin",
    toShow : false
  },
  {
    path: "/creer-client",
    name: "Creer Client",
    icon: Person,
    component: CreateClient,
    layout: "/admin",
    toShow : false
  }
];

export default dashboardRoutes;
