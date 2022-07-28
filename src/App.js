import React, { useState } from "react";
import "./App.css";
import { GroceryList, Form } from "./Components";

function App() {
  const [items, setItems] = useState([]);

  function addItems(item) {
    setItems([item, ...items]);
  }

  return (
    <div>
      <h1>Grocery List</h1>
      <Form addItems={addItems} />
      <GroceryList items={items} />
    </div>
  );
}

export default App;
