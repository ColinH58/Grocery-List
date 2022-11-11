import React, { useState } from "react";
import "./App.css";
import { GroceryList, Form } from "./Components";

function App() {
  const [groceryItems, setGroceryItems] = useState([]);

  function addItems(item) {
    setGroceryItems([item, ...groceryItems]);
  }

  function itemBought(id) {
    setGroceryItems(
      groceryItems.map((item) => {
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
    setGroceryItems(groceryItems.filter((item) => item.id !== id));
  }

  return (
    <div>
      <h1>Grocery List</h1>
      <Form addItems={addItems} />
      <GroceryList
        groceryItems={groceryItems}
        itemBought={itemBought}
        removeItem={removeItem}
      />
    </div>
  );
}

export default App;
