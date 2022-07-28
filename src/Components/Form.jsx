import React, { useState } from "react";
import uuid from "uuid";

const Form = ({ addItems }) => {
  const [item, setItem] = useState({
    id: "",
    item: "",
    bought: false,
  });

  function handleInput(e) {
    setItem({ ...item, task: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (item.task.trim()) {
      addItems({ ...item, id: uuid.v4() });
      setItem({ ...item, task: "" });
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="Item"
          type="text"
          value={item.task}
          onChange={handleInput}
        />
        <button type="submit" />
      </form>
    </div>
  );
};

export default Form;
