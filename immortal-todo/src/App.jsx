import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [valueInput, setValueInput] = useState("");

  const [dataTask, setDataTask] = useState([
    { id: 12, name: "сходить в магазин", completed: false, data: "" },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { id: 12, name: valueInput, completed: false, data: "" };
    setDataTask([...dataTask, newTask]);
    setValueInput("");
  };

  useEffect(() => {}, []);

  return (
    <div className="App">
      <div className="header">TODO LIST</div>
      <div className="contetn">
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Название задачи"
            type="text"
            value={valueInput}
            onChange={(e) => setValueInput(e.target.value)}
          />
          <button type="submit" disabled={valueInput === ""}>
            добавить задачу
          </button>
        </form>

        <div className="tasks">
          {dataTask.map((d) => (
            <span key={d.id}>
              {d.name}
              <span>{d.id}</span>
              <input type="checkbox"></input>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
