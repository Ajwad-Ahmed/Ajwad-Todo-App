function TodoInput({ inputText, setInputText, addTodo }) {
  return (
    <div className="todo-body">
      <input
        type="text"
        className="todo-input"
        placeholder="Add your items"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && addTodo()}
      />
      <img src="plus.png" alt="add" height="50px" onClick={addTodo} />
    </div>
  );
}

export default TodoInput;
