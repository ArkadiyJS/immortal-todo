import React from "react";
import s from "./tasks.module.css";
import ButtonDeleteTask from "./buttonDeleteTask";

const Tasks = ({ name, id, completed, data, removeWithDelay }) => {
  return (
    <div className={s.tasks}>
      <div className={s.nameTask}>{name}</div>
      <div className={s.data}>{data}</div>
      <input className={s.taskCheckbox} type="checkbox" />
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
