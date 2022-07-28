import React from "react";
import Items from "./Items";

const GroceryList = ({ items }) => {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <Items key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default GroceryList;
