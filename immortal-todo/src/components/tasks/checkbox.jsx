import React from "react";
import s from "./checkbox.module.scss";

const Checkbox = ({ completed, toggleTaskCompleted, id }) => {
  return (
    <>
      <input
        className={`${s.cb} ${s.pristine}`}
        checked={completed}
        onChange={() => toggleTaskCompleted(id)}
        type="checkbox"
      />{" "}
    </>
  );
};

export default Checkbox;
