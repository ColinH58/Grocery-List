import React from "react";
import Items from "./Items";

const GroceryList = ({ groceryItems, itemBought, removeItem }) => {
  return (
    <div>
      <ul>
        {groceryItems.map((item) => (
          <Items
            key={item.id}
            item={item}
            itemBought={itemBought}
            removeItem={removeItem}
          />
        ))}
      </ul>
    </div>
  );
};

export default GroceryList;
