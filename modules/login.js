const handleLogin = () => {
  document.querySelector('#submit').addEventListener("click", (e) => {
    e.preventDefault()
    const loginUrl = "http://34.64.124.246:8080/api/v1/login"  
    const username = document.querySelector("#email").value
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
      },
      mode: 'cors',
      body: JSON.stringify(data)
    }).then(response => {
      if(!response.ok) {
        alert("로그인 할 수 없습니다.[요청 실패]");
      }
      return response.json()
    }).then(resp => {
      if(!resp.data) {
        alert("로그인 할 수 없습니다.[응답 데이터 없음]")
        return null
      }
      
      // 스토리지에 저장
      localStorage.setItem('j2kb-accessToken', resp.data.accessToken);
      localStorage.setItem('j2kb-userId', resp.data.userId)
      
      // 로그인 결과 반영
      const login = document.querySelector("#login")
      login.textContent = "Logout"
      window.location = "/home"
    }).catch((e)=>{
      console.log("로그인 할 수 없습니다."+e)
    })
  })
}

module.exports = {
  handleLogin
}