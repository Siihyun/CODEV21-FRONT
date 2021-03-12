const modal = document.querySelector(".modal");

const toggleModal = () => {
  modal.classList.toggle("visible");
};

const initModal = () => {
  const closeModal = document.querySelector(".close");
  closeModal.addEventListener("click", () => {
    toggleModal();
  });
  window.addEventListener("click", (event) => {
    if (event.target == modal) {
      toggleModal();
    }
  });
};

module.exports = {
  toggleModal,
  initModal,
};
