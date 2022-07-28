import React, { useState } from "react";
import "./App.css";
import { GroceryList, Form } from "./Components";

function App() {
  const [items, setItems] = useState([]);

  function addItems(item) {
    setItems([item, ...items]);
  }

  function itemBought(id) {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            bought: !item.bought,
          };
        }
        return item;
      })
    );
  }

  function removeItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  return (
    <div>
      <h1>Grocery List</h1>
      <Form addItems={addItems} />
      <GroceryList
        items={items}
        itemBought={itemBought}
        removeItem={removeItem}
      />
    </div>
  );
}

export default App;
