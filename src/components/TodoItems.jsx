function TodoItems({ todoItems, onDelete, onEdit }) {
  return (
    <div className="list-items">
      <ul>
        {todoItems.map((item) => (
          <li key={item.id} className="todo-item">
            {item.text}
            <div>
              <img
                src="pencil.png"
                alt="edit"
                className="todo-controls edit"
                onClick={() => onEdit(item)}
              />
              <img
                src="delete.png"
                alt="delete"
                className="todo-controls"
                onClick={() => onDelete(item.id)}
              />
            </div>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TodoItems;
