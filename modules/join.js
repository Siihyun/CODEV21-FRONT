const handleJoin = () => {
    const name = document.querySelector(".username"),
    id = document.querySelector(".userid"),
    psword = document.querySelector(".password"),
    confirmPsword = document.querySelector(".confirm_password"),
    joinBtn = document.querySelector(".join_button");

joinBtn.addEventListener("click", join);

if (psword === confirmPsword){
    let _data = {
    "name" : name,
    "password" : psword,
    "email" : "jikimee64@gmail.com",
    "joinGisu" : "2기",
    "githubId" : "jikimee64@gmail.com",
    "isOauth" : true
}
    fetch('https:', {
        method: "POST",
        body: JSON.stringify(_data),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json()) 
    .then(json => console.log(json))
    .catch(err => console.log(err));
}
else{
    alert("비밀번호가 다릅니다.")
}


};

module.exports = {
  handleJoin,
};

