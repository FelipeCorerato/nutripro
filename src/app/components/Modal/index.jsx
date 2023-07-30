export const toggleModal = ({ id }) => {
  window[id].showModal();
};

export const Modal = ({ children, id }) => {
  return(
    <dialog id={id} className="modal">
      <form method="dialog" className="modal-box">
        {children}
      </form>
    </dialog>
  );
}