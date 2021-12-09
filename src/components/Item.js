import React, { useState } from "react";

function Item({ name, category }) {
  const [toggleCard, setToggleCart] = useState(false);
  const buttonText = toggleCard ? "Remove From Cart" : "Add to Cart"
  const liClass = toggleCard ? "in-cart" : ""
  const buttonClass = toggleCard ? "remove" : "add"

  function handleAddCart() {
    setToggleCart(!toggleCard)
  }

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAddCart} className={buttonClass}>{buttonText}</button>
    </li>
  );
}

export default Item;
