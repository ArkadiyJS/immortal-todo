import React from "react";
import s from "./tasks.module.css";
import ButtonDeleteTask from "./buttonDeleteTask";

// TODO реализовать функционал чек бокс выполнение таски

const Tasks = ({
  name,
  id,
  completed,
  data,
  removeWithDelay,
  toggleTaskCompleted,
}) => {
  return (
    <div
      className={s.tasks}
      style={{
        textDecoration: completed ? "line-through" : "none",
        backgroundColor: completed ? "green" : `darkorange`,
      }}
    >
      <div className={s.nameTask}>{name}</div>
      <div className={s.data}>{data}</div>
      <input
        checked={completed}
        onChange={() => toggleTaskCompleted(id)}
        className={s.taskCheckbox}
        type="checkbox"
      />
      <ButtonDeleteTask
        id={id}
        removeWithDelay={removeWithDelay}
        className={s.btnDel}
      >
        delete
      </ButtonDeleteTask>
    </div>
    // checked={completed}
  );
};

export default Tasks;
