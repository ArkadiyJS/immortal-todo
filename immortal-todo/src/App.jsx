import { useEffect, useState } from "react";

import "./App.css";
import Tasks from "./components/tasks/tasks";
import FormTodo from "./components/formTodo/formTodo";

function App() {
  const [dataTask, setDataTask] = useState([]);

  console.log(dataTask);
  const removeWithDelay = (id) => {
    setTimeout(() => {
      setDataTask((dataTask) => dataTask.filter((item) => item.id !== id));
    }, 3100);
  };
  useEffect(() => {}, []);

  return (
    <div className="App">
      <h1 className="header">TODO LIST</h1>
      <div className="content">
        <FormTodo dataTask={dataTask} setDataTask={setDataTask} />
        {dataTask.map((d) => (
          <Tasks
            removeWithDelay={removeWithDelay}
            key={d.id}
            name={d.name}
            completed={d.completed}
            id={d.id}
            data={d.data}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
