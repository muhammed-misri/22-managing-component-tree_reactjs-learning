// add item >> click on it >> text Decoration = line through
// -----------------------------------------------------
/*
import React, { useState } from "react";

function ToDoItem(props) {
  const [isDone, setISDone] = useState(false);

  function handleClick() {
    setISDone((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <div onClick={handleClick}>
      <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
        {props.text}
      </li>
    </div>
  );
}

export default ToDoItem;
*/
// -----------------------------------------------------

import React, { useState } from "react";

function ToDoItem(props) {
  return (
    // nothing gets printed until I click on this ToDoItem
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoItem;
