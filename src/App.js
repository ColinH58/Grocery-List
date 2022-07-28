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
      <GroceryList items={items} />
      <Form addItems={addItems} />
    </div>
  );
}

export default App;
