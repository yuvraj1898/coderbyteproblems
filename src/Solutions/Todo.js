import React, { useEffect, useState } from "react";

const mockApi = {
  addTodo: (todos, newTodo) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve([...todos, newTodo]);
      }, 1000);
    }),
  fetchTodos: () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, title: "Learn React", status: "Completed" },
          { id: 2, title: "Practice JavaScript", status: "Pending" },
          { id: 3, title: "Build a Project", status: "Completed" },
        ]);
      }, 2000);
    }),
  deleteTodo: (todos, deletetodoid) =>
    new Promise((resolve) => {
      setTimeout(() => {
        const updatedtodos = todos.filter((todo) => todo.id !== deletetodoid);
        resolve(updatedtodos);
      }, 2000);
    }),
  updateTodoStatus: (todos, id, newStatus) =>
    new Promise((resolve) => {
      setTimeout(() => {
        const updatedTodos = todos.map((todo) =>
          todo.id === id ? { ...todo, status: newStatus } : todo
        );
        resolve(updatedTodos);
      }, 500);
    }),
};

function Todo() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(4);

  useEffect(() => {
    getAlltodos();
  }, []);

  const getAlltodos = async () => {
    setLoading(true);
    const alltodos = await mockApi.fetchTodos();
    setTodos(alltodos);
    setLoading(false);
  };

  const insertTodo = () => {
    setLoading(true);
    const tododata = {
      id: count,
      title: todo,
      status: "Pending",
    };
    mockApi
      .addTodo(todos, tododata)
      .then((altodos) => setTodos(altodos))
      .finally(() => {
        setTodo("");
        setLoading(false);
      });
    setCount(count + 1);
  };

  const deltodo = async (id) => {
    setLoading(true);
    const updatedtodos = await mockApi.deleteTodo(todos, id);
    setTodos(updatedtodos);
    setLoading(false);
  };

  const toggleStatus = async (id, newStatus) => {
    setLoading(true);
    const updatedTodos = await mockApi.updateTodoStatus(todos, id, newStatus);
    setTodos(updatedTodos);
    setLoading(false);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter new task"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <button onClick={insertTodo} disabled={loading || !todo.trim()}>
        Add Todo
      </button>
      {loading && <p>Loading...</p>}
      <ul>
        {!loading &&
          todos.map((item) => (
            <li key={item.id}>
              {item.title} - {item.status}
              <div>
                <label>
                  <input
                    type="radio"
                    name={`status-${item.id}`}
                    checked={item.status === "Pending"}
                    onChange={() => toggleStatus(item.id, "Pending")}
                  />
                  Pending
                </label>
                <label>
                  <input
                    type="radio"
                    name={`status-${item.id}`}
                    checked={item.status === "Completed"}
                    onChange={() => toggleStatus(item.id, "Completed")}
                  />
                  Completed
                </label>
              </div>
              <button onClick={() => deltodo(item.id)} disabled={loading}>
                Delete
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Todo;
