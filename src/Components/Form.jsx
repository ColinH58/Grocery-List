import React, { useState } from "react";
import { v4 as uuid} from "uuid";

const Form = ({ addItems }) => {
  const [item, setItem] = useState({
    id: "",
    entry: "",
    bought: false
  });

  function handleInput(e) {
    setItem({ ...item, entry: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (item.entry.trim()) {
      addItems({ ...item, id: uuid.v4() });
      setItem({ ...item, entry: "" });
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="item"
          type="text"
          value={item.entry}
          onChange={handleInput}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
