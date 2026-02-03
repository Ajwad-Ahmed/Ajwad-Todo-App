function EditModal({ isOpen, onClose, onSave, editText, setEditText }) {
  if (!isOpen) return null;
  return (
    <div className="modal">
      <div className="modal-content">
        <p>Edit Todo</p>
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
        <div>
          <button className="button1" onClick={onSave}>
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
export default EditModal;
