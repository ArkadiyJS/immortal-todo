import React from "react";
import s from "./tasks.module.css";
import ButtonDeleteTask from "./buttonDeleteTask";
import Checkbox from "./checkbox";

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

      <Checkbox
        completed={completed}
        toggleTaskCompleted={toggleTaskCompleted}
        id={id}
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
