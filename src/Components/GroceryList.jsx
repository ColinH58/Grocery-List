import React from "react";
import Items from "./Items";

const GroceryList = ({ items, itemBought, removeItem }) => {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <Items key={item.id} item={item} itemBought={itemBought} removeItem={removeItem} />
        ))}
      </ul>
    </div>
  );
};

export default GroceryList;
