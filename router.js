// template
const homeTemplate = require("./pages/home.hbs");
const aboutTemplate = require("./pages/about.hbs");
const projectTemplate = require("./pages/project.hbs");
const editTemplate = require("./pages/edit.hbs");
const loginTemplate = require("./pages/login.hbs");
const joinTemplate = require("./pages/join.hbs");

const Home = homeTemplate();
const About = aboutTemplate();
const Project = projectTemplate();
const Edit = editTemplate();
const Login = loginTemplate();
const Join = joinTemplate();

const routes = {
  "/": Home,
  "/home": Home,
  "/about": About,
  "/project": Project,
  "/edit": Edit,
  "/login": Login,
  "/join": Join
};

// entry point
const initialRoutes = (element) => {
  renderHTML(element, routes["/"]);

  window.onpopstate = () =>
    renderHTML(element, routes[window.location.pathname]);
};

// set browser history
const historyRouterPush = (pathName, element) => {
  window.history.pushState({}, pathName, window.location.origin + pathName);
  renderHTML(element, routes[pathName]);
};

// render
const renderHTML = (element, route) => {
  element.innerHTML = route;
};

module.exports = {
  initialRoutes,
  historyRouterPush,
};
