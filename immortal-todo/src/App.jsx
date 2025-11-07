import { useEffect, useState } from "react";

import "./App.css";
import Tasks from "./tasks";
import FormTodo from "./components/formTodo/formTodo";

function App() {
  const [dataTask, setDataTask] = useState([]);

  console.log(dataTask);

  useEffect(() => {}, []);

  return (
    <div className="App">
      <h1 className="header">TODO LIST</h1>
      <div className="content">
        <FormTodo dataTask={dataTask} setDataTask={setDataTask} />
        {dataTask.map((d) => (
          <Tasks
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
