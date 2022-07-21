(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.modal.addEventListener('click', onBackDropClick);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
  function onBackDropClick(evt) {
    if (evt.target === evt.currentTarget) {
      toggleModal();
    }
  }
})();