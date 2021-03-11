// css
require("./css/style.css");

const { handleHome } = require("./modules/home.js");
const { handleAbout } = require("./modules/about.js");
const { handleProject } = require("./modules/project.js");
const { initEditor } = require("./modules/edit.js");
const { handleLogin } = require("./modules/login.js");

// router
const { initialRoutes, historyRouterPush } = require("./router");

// app division
const contentDiv = document.querySelector("#app-content");

// Browser History
initialRoutes(contentDiv);


window.onload = () => {
  const historyLinker = document.querySelectorAll(".history");
  
  historyLinker.forEach((element) => {
    element.addEventListener("click", (event) => {
      const pathName = event.target.getAttribute("route");
      historyRouterPush(pathName, contentDiv);
      //initLogin()
      //initEditor()
    });
  });
};
/* 원하는 event를 여기다 다시면 됩니다 */
contentDiv.addEventListener("click", (e) => {
  const target = e.target;

  if (target.classList.contains("test")) {
    console.log("click test!");
  }

  handleLogin()
});

const initLogin = () => {
  const login = document.querySelector("#login")
  const menu = document.querySelector("#menu")

  login.addEventListener("click", (event)=> {
    event.preventDefault();

    // 로그인 중이면 로그 아웃하기
    if(login.textContent === "Logout") {
      logout()
    }
  })

  menu.addEventListener("click", (event) => {
    event.preventDefault()
    if(menu.textContent === "Add") {
      window.location = "/edit"
    }
  })
}

const logout = () => {
  login.textContent = "Login"
  menu.textContent = "Join"
  localStorage.removeItem('j2kb-accessToken')
}