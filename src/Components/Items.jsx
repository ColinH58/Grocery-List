import React from "react";

const Items = ({ item }) => {
  return (
    <div style={{ display: "flex" }}>
      <input type="checkbox" />
      <li
        style={{
          color: "black",
          textDecoration: item.bought ? "line-through" : null,
        }}
      >
        {item.entry}
      </li>
      <button>X</button>
    </div>
  );
};

export default Items;
