const handleAbout = () => {
  const test = document.querySelector(".test");
  test.addEventListener("click", () => {
    console.log("click test!");
  });
};

module.exports = {
  handleAbout,
};
