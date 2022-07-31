// add item >> click on it >> text Decoration = line through
// -----------------------------------------------------
/*
import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => (
            <ToDoItem text={todoItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
*/

// -----------------------------------------------------

import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function deleteItem(id) {
    /* 
      If I wanted to delete an item from my items array, 
      I'm probably going to need to call setItems.
    */
    // --------------------------------------
    /*
    we're going to return a array and that array is 
    going to be constructed from our previous items array.

    But it's going to be filtered so that we get 
    rid of the item that we don't want, 
    so the one that has this id that was passed over. 


    Let's go ahead and add a arrow function and inside 
    this filter function, we have access to two properties
    
    The first one is the actual element that's being 
    looped through in the array

    and the second one is the index of the current element.

    So we can tap in to each item as we're looping through 
    previous items and we can also tap 
    into the index of that item.

    Now we're going to go through our array of previous 
    items, look through each item and get the index of
    each item and we're going to return an output, 
    a final array, that is going to return all 
    the items where the index is not equal to the id 
    being passed over.



    */
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {/* 
            I can delete an item by adding an id.
            
            And I'm going to set this key to the index of the 
            ToDoItem from the items array. 

            And this map function actually gives me a really 
            easy way of accessing that.

            Notice how in this callback function the first item 
            I provide is the value,
            so the value of each item from the array.

            So in this case its the do item that 
            I've already tapped into.

            But if I add a comma and I add another variable 
            name then I can tap into the index of this item 
            in the items array.

            So the second one I'm going to call index.

            And I'm going to use the index as the key.

            But in our case we're going to leave it as the index 
            because we want to use this index and we want to use 
            it to pass over to our ToDoItem as an id. 
          */}
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
