function DeleteModal({ isOpen, onConfirm, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <p>Are you sure you want to delete?</p>
        <div>
          <button className="button1" onClick={onConfirm}>
            Yes
          </button>
          <button className="button2" onClick={onClose}>
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
