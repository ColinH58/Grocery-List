import React, { useState } from "react";

const Form = ({ addItems }) => {
  const [item, setGroceryItem] = useState({
    id: "",
    entry: "",
    bought: false
  });

  function handleInput(e) {
    setGroceryItem({ ...item, entry: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (item.entry.trim()) {
      addItems({ ...item, id: item.entry });
      setGroceryItem({ ...item, entry: "" });
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
