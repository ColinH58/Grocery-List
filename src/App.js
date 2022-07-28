import React, { useState, useEffect } from "react";
import "./App.css";
import { GroceryList, Form } from "./Components";

const LOCAL_STORAGE_KEY = "react-grocery-list";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storeItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storeItems) {
      setItems(storeItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
  }, [items]);

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
