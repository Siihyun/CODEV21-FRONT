// css
require("./css/style.css");
require("./css/about.css");
require("./css/project.css");
require("./css/modal.css");

const { handleHome } = require("./modules/home.js");
const { handleAbout } = require("./modules/about.js");
const { handleProject } = require("./modules/project.js");
const { handleEdit } = require("./modules/edit.js");
const { handleLogin } = require("./modules/login.js");
const { handleJoin } = require("./modules/join.js");
const { toggleModal, initModal } = require("./modules/modal.js");

// router
const { initialRoutes, historyRouterPush } = require("./router");

// app division
const contentDiv = document.querySelector("#app-content");

// Browser History
initialRoutes(contentDiv);

window.onload = () => {
  const historyLinker = document.querySelectorAll(".history");
  initModal();
  historyLinker.forEach((element) => {
    element.addEventListener("click", (event) => {
      const pathName = event.target.getAttribute("route");
      historyRouterPush(pathName, contentDiv);
      if (pathName === "/edit") {
        handleEdit();
      }
      if (pathName === "/login") {
        handleLogin();
      }
    });
  });
};

if (localStorage.getItem("j2kb-accessToken")) {
  const login = document.querySelector("#login");
  const edit = document.querySelector("#edit");
  const join = document.querySelector("#join");

  login.textContent = "Logout";
  edit.classList.remove("hide");
  join.classList.add("hide");

  login.addEventListener("click", (e) => {
    localStorage.removeItem("j2kb-accessToken");
    login.textContent = "Login";
    edit.classList.add("hide");
    join.classList.remove("hide");
  });
}
/* 원하는 event를 여기다 다시면 됩니다 */
contentDiv.addEventListener("click", (e) => {
  const target = e.target;
  console.log(target.classList.value.includes("card"));

  if (target.classList.value.includes("card")) {
    toggleModal();
  }
});
