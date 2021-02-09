// css
require("./css/style.css");

const { handleHome } = require("./modules/home.js");
const { handleAbout } = require("./modules/about.js");
const { handleProject } = require("./modules/project.js");

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
    });
  });
};

const login = document.querySelector("#login")
login.addEventListener("click", (event)=> {
  event.preventDefault();

  // 로그인 중이면 로그 아웃하기
  if(login.textContent === "Logout") {
      login.textContent = "Login"
      return
  }

  // 로그인이 아니라면 로그인 창 띄우기
  window.open("./login.html", "_black", 'width=300px,height=300px,toolbars=no,scrollbars=no');
  
})
/* 원하는 event를 여기다 다시면 됩니다 */
contentDiv.addEventListener("click", (e) => {
  const target = e.target;

  if (target.classList.contains("test")) {
    console.log("click test!");
  }
});
