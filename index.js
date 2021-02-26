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
  historyRouterPush("/edit", contentDiv)

  $('#summernote').summernote({
    placeholder: '프로젝트에 대한 설명을 적어주세요',
    tabsize: 2,
    height: 500,
    toolbar: [
      ['style', ['style']],
      ['font', ['bold', 'underline', 'clear']],
      ['color', ['color']],
      ['para', ['ul', 'ol', 'paragraph']],
      ['table', ['table']],
      ['insert', ['link', 'picture', 'video']],
      ['view', ['fullscreen', 'codeview', 'help']]
    ]
  });

  const saveButton = document.querySelector("#edit__save")
    saveButton.addEventListener("click", (e) => {
        const content = {}
        content.main = $('#summernote').summernote('code')
        content.title = document.querySelector("#edit__title").value
        content.team = document.querySelector("#edit__team").value
        content.summary = document.querySelector("#edit__title").value
        content.thumbnail = document.querySelector("#thumbnail").files[0]
        console.log(content)
  })

  const login = document.querySelector("#login")
  const menu = document.querySelector("#menu")

  login.addEventListener("click", (event)=> {
    event.preventDefault();

    // 로그인 중이면 로그 아웃하기
    if(login.textContent === "Logout") {
      login.textContent = "Login"
      menu.textContent = "Join"
      return
    }

    // 로그인이 아니라면 로그인 창 띄우기
    window.open("./login.html", "_black", 'width=300px,height=300px,toolbars=no,scrollbars=no');

    // 로그인이 성공할 경우
    menu.textContent = "Add"
  })

  menu.addEventListener("click", (event) => {
    event.preventDefault()
    if(menu.textContent === "Add") {
      window.location = "/edit"
    }
  })

};
/* 원하는 event를 여기다 다시면 됩니다 */
contentDiv.addEventListener("click", (e) => {
  const target = e.target;

  if (target.classList.contains("test")) {
    console.log("click test!");
  }


  // modal
  // const openModal = document.querySelector(".modal");

  // if (target.classList.contains("card")) {
  //   openModal.style.display = "block";
  // }

  // const closeModal = document.querySelector(".close");

  // openModal.forEach((card) => {
  //     card.addEventListener("click", () => {
  //         modal.style.display = "block";
  //     });
  // });

  // closeModal.onclick = () => {
  //     modal.style.display = "none";
  // }

  // window.onclick = event => {
  //     if (event.target == modal) {
  //         modal.style.display = "none";
  //     }
  // }
});
