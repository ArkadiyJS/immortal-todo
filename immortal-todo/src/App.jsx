import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [valueInput, setValueInput] = useState("");

  const dataTask = [
    { id: 12, name: "сходить в магазин", completed: false, data: "" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
            <div>
              {d.name}
              <div>{d.id}</div>
              <input type="checkbox"></input>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
