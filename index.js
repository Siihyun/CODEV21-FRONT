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
  historyRouterPush("/edit", contentDiv)
  const historyLinker = document.querySelectorAll(".history");

  historyLinker.forEach((element) => {
    element.addEventListener("click", (event) => {
      const pathName = event.target.getAttribute("route");

      historyRouterPush(pathName, contentDiv);
    });
  });

  initEditor()

  initLogin()

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

const initEditor = () => {
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
        if(!localStorage.getItem('j2kb-accessToken')) {
          alert("인증에 문제가 있습니다.")
          return
        }

        const token = localStorage.getItem('j2kb-accessToken')

        const thumbnail = document.querySelector("#thumbnail").files[0]
        if(!thumbnail) {
          alert("섬네일 파일이 필요합니다.")
          return
        }

        if(thumbnail.name.endsWith(".png") || thumbnail.name.endsWith(".jpg") || thumbnail.name.endsWith(".jpeg")) {
          const formdata = new FormData();
          formdata.append("image-file", thumbnail, thumbnail.name);

          const data = {}
          data.content = $('#summernote').summernote('code')
          data.title = document.querySelector("#edit__title").value
          data.team = document.querySelector("#edit__team").value
          data.summary = document.querySelector("#edit__title").value
          formdata.append("json-data", JSON.stringify(data))        

          var requestOptions = {
              method: 'POST',
              body: formdata,
              redirect: 'follow',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bear ' + token
            },
          };
          
          fetch("http://34.64.124.246:8080/api/v1/boards", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
          
          window.location = "/project"
          return
        }

        alert("jpg와 png파일만 업로드 가능합니다.")        
        
    })
}

const initLogin = () => {
  const login = document.querySelector("#login")
  const menu = document.querySelector("#menu")

  login.addEventListener("click", (event)=> {
    event.preventDefault();

    // 로그인 중이면 로그 아웃하기
    if(login.textContent === "Logout") {
      logout()
      return
    }

    // 로그인이 아니라면 로그인 창 띄우기
    window.open("./login.html", "_black", 'width=300px,height=300px,toolbars=no,scrollbars=no');
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