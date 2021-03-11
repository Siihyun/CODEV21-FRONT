const handleProject = () => {
  const topic = document.querySelector(".topic"),
    team = document.querySelector(".team"),
    content = document.querySelector(".content");

  fetch('https:', {
        method: "GET",
        body: JSON.stringify(_data),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json()) 
    .then(json => console.log(json))
    .catch(err => console.log(err));
};

module.exports = {
  handleProject,
};