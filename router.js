// template
const homeTemplate = require("./pages/home.hbs");
const aboutTemplate = require("./pages/about.hbs");
const projectTemplate = require("./pages/project.hbs");

const Home = homeTemplate();
const About = aboutTemplate();
const Project = projectTemplate();

const routes = {
  "/": Home,
  "/home": Home,
  "/about": About,
  "/project": Project,
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
  renderHTML(element, routes[pathName], pathName);
};

// render
const renderHTML = (element, route, pathName) => {
  element.innerHTML = route;
};

module.exports = {
  initialRoutes,
  historyRouterPush,
};
