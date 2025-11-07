import { useEffect, useState } from "react";
import nextId from "react-id-generator";

import "./App.css";

function App() {
  const [valueInput, setValueInput] = useState("");

  const [dataTask, setDataTask] = useState([
    { id: 12, name: "сходить в магазин", completed: false, data: "" },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const generationID = nextId();
    const newTask = {
      id: generationID,
      name: valueInput,
      completed: false,
      data: "",
    };
    setDataTask([...dataTask, newTask]);
    setValueInput("");
  };

  console.log(dataTask);

  useEffect(() => {}, []);

  return (
    <div className="App">
      <h1 className="header">TODO LIST</h1>
      <div className="content">
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
