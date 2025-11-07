import { useEffect, useState } from "react";
import nextId from "react-id-generator";

import "./App.css";
import Tasks from "./tasks";

function App() {
  const [valueInput, setValueInput] = useState("");

  const [dataTask, setDataTask] = useState([
    { id: 12, name: "сходить в магазин", completed: true, data: "" },
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
        <form className="formTodo" onSubmit={handleSubmit}>
          <input
            maxLength="40"
            placeholder="Название задачи"
            type="text"
            value={valueInput}
            onChange={(e) => setValueInput(e.target.value)}
          />
          <button type="submit" disabled={valueInput === ""}>
            добавить задачу
          </button>
        </form>

        <div>
          {dataTask.map((d) => (
            <Tasks key={d.id} name={d.name} completed={d.completed} id={d.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
