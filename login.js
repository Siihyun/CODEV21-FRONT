document.querySelector('#submit').addEventListener("click", () => {
    const username = document.querySelector("#username").value
    const password = document.querySelector("#password").value
    // 비밀 번호 암호화
    
    // 로그인 검증
    const isLogin = true
    
    // 부모창으로 로그인 결과 전송
    const login = opener.document.querySelector("#login")
    login.textContent = (isLogin)? "Logout" : "Login"
    self.close()
  })