import React, { useState } from "react";
import nextId from "react-id-generator";

const FormTodo = ({ setDataTask, dataTask }) => {
  const [valueInput, setValueInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const now = new Date();
    const generationID = nextId();
    const newTask = {
      id: generationID,
      name: valueInput,
      completed: false,
      data: `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`,
    };
    setDataTask([...dataTask, newTask]);
    setValueInput("");
  };

  return (
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
  );
};

export default FormTodo;
