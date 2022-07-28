import React from "react";

const Items = ({ item }) => {
  return (
    <div>
      <input type="checkbox" />
      <li>{item.task}</li>
      <button>X</button>
    </div>
  );
};

export default Items;
