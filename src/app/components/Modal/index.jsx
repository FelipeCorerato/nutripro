export const openModal = ({ id }) => {
  window[id].showModal();
};

export const closeModal = ({ id }) => {
  window[id].close();
}

export const Modal = ({ children, id }) => {
  return(
    <dialog id={id} className="modal">
      <form method="dialog" className="modal-box">
        {children}
      </form>
    </dialog>
  );
}