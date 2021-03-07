document.querySelector('#submit').addEventListener("click", () => {
    const loginUrl = "http://localhost:9080/dummy/login"  
    const username = document.querySelector("#username").value
    const password = document.querySelector("#password").value
    
    // json만들기
    const data = {}
    data.username = username
    data.password = password

    // 로그인 검증
    fetch(loginUrl, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': "application/json",
      },
      body: JSON.stringify(data)
    }).then(response => {
      return response.json()
    }).then(resp => {
      if(resp.data) {
        // 스토리지에 저장
        localStorage.setItem('j2kb-accessToken', resp.data.accessToken);
        localStorage.setItem('j2kb-userId', resp.data.userId)
        
        // 부모창으로 로그인 결과 전송
        const login = opener.document.querySelector("#login")
        const menu = opener.document.querySelector("#menu")
        login.textContent = "Logout"
        menu.textContent = "Add"
        self.close()
        return
      }
      alert("로그인 할 수 없습니다.")
    }).catch((e)=>{
      console.log(e)
      alert("로그인 할 수 없습니다.")
    })
  })