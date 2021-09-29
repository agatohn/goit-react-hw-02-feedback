import React from "react";
import style from "./ButtonBlock.module.css";

const Buttons = ({ addFeedback, options }) => {
  return (
    <>
      {options.map((option) => (
        <button
          key={option}
          type="button"
          className={style.button}
          name={option}
          onClick={addFeedback}
        >
          {option}
        </button>
      ))}
    </>
  );
};

export default Buttons;
