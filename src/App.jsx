import TodoInput from "./components/TodoInput";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import DeleteModal from "./components/DeleteModal";
import EditModal from "./components/EditModal";
import { useState } from "react";
import "./App.css";
function App() {
  const [inputText, setInputText] = useState("");
  const [todoItems, setTodoItems] = useState([]);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [todoToDelete, setTodoToDelete] = useState(null);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editText, setEditText] = useState("");
  const [currentTodo, setCurrentTodo] = useState(null);

  const addTodo = () => {
    if (inputText.trim() === "") return;
    setTodoItems([...todoItems, { id: Date.now(), text: inputText }]);
    setInputText("");
  };

  const openDeleteModal = (id) => {
    setTodoToDelete(id);
    setIsDeleteModalOpen(true);
  };
  const confirmDelete = () => {
    setTodoItems((prev) => prev.filter((item) => item.id !== todoToDelete));
    closeDeleteModal();
  };
  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setTodoToDelete(null);
  };

  const openEditModal = (todo) => {
    setCurrentTodo(todo);
    setEditText(todo.text);
    setIsEditModalOpen(true);
  };
  const saveEditedTodo = () => {
    if (!editText.trim()) return;

    setTodoItems((prev) =>
      prev.map((item) => {
        if (item.id === currentTodo.id) {
          return { ...item, text: editText };
        }
        return item;
      }),
    );

    closeEditModal();
  };
  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setEditText("");
    setCurrentTodo(null);
  };

  return (
    <div className="container">
      <AppName />
      <TodoInput
        inputText={inputText}
        setInputText={setInputText}
        addTodo={addTodo}
      />
      <TodoItems
        todoItems={todoItems}
        onDelete={openDeleteModal}
        onEdit={openEditModal}
      />
      <DeleteModal
        isOpen={isDeleteModalOpen}
        onConfirm={confirmDelete}
        onClose={closeDeleteModal}
      />
      <EditModal
        isOpen={isEditModalOpen}
        onClose={closeEditModal}
        onSave={saveEditedTodo}
        editText={editText}
        setEditText={setEditText}
      />
    </div>
  );
}

export default App;
