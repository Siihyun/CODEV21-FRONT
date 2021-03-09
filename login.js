document.querySelector('#submit').addEventListener("click", () => {
    const loginUrl = "http://34.64.124.246:8080/api/v1/login"  
    const username = document.querySelector("#username").value
    const password = document.querySelector("#password").value
    
    // json만들기
    const data = {}
    data.email = username
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
      if(!resp.data) {
        alert("로그인 할 수 없습니다.[응답 데이터 없음]")
        return null
      }
      
      // 스토리지에 저장
      opener.localStorage.setItem('j2kb-accessToken', resp.data.accessToken);
      opener.localStorage.setItem('j2kb-userId', resp.data.userId)
      
      // 부모창으로 로그인 결과 전송
      const login = opener.document.querySelector("#login")
      const menu = opener.document.querySelector("#menu")
      login.textContent = "Logout"
      menu.textContent = "Add"
      
      // 화면 닫기
      self.close()
    }).catch((e)=>{
      alert("로그인 할 수 없습니다."+e)
    })
  })