import React from "react";
import s from "./tasks.module.css";

const Tasks = ({ name, id, completed, data }) => {
  return (
    <div className={s.tasks}>
      <div className={s.nameTask}>{name}</div>
      <div className={s.data}>{data}</div>
      <input className={s.taskCheckbox} type="checkbox" />
      <button className={s.btnDel}>delete</button>
    </div>
    // checked={completed}
  );
};

export default Tasks;
