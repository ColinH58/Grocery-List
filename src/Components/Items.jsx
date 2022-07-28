import React from "react";

const Items = ({ item, itemBought, removeItem }) => {
  function handleBought() {
    itemBought(item.id)
  }

  function handleRemoveItem() {
    removeItem(item.id);
  }

  return (
    <div style={{ display: "flex" }}>
      <input type="checkbox" onClick={handleBought} />
      <li
        style={{
          color: "whitesmoke",
          textDecoration: item.bought ? "line-through" : null,
        }}
      >
        {item.entry}
      </li>
      <button onClick={handleRemoveItem}>X</button>
    </div>
  );
};

export default Items;
