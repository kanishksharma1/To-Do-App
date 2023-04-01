import { react, useState } from "react";
import ToDoItem from "./ToDoItem";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, { text: inputText, isDone: false }];
    });
    setInputText("");
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index != id;
      });
    });
    deletedTask();
  }

  function remainingTask() {
    setCount(count + 1);
  }

  function deletedTask() {
    if (count > 0) {
      setCount((counter) => counter - 1);
      setCompletedCount((prevCount) => prevCount + 1);
    }
  }

  function markComplete(id, prevIsDone) {
    setItems((prevItems) => {
      return prevItems.map((item, index) => {
        if (index == id) {
          return { text: item.text, isDone: !item.isDone };
        } else return item;
      });
    });
    if (prevIsDone) {
      setCompletedCount((prevCount) => prevCount - 1);
      setCount((prevCount) => prevCount + 1);
    } else {
      setCompletedCount((prevCount) => prevCount + 1);
      setCount((prevCount) => prevCount - 1);
    }
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>TO-DO-LIST</h1>
      </div>
      <div className="form">
        <input
          onChange={handleChange}
          type="text"
          className="text"
          value={inputText}
        />
        <button
          onClick={() => {
            if (inputText != "") {
              addItem();
              remainingTask();
            }
          }}
        >
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              onChecked={deleteItem}
              onDeleteTask={deletedTask}
              item={todoItem}
              markComplete={markComplete}
            />
          ))}
        </ul>
      </div>
      <h4>Remaining Task: {count}</h4>
      <h4>Completed Task: {completedCount}</h4>
    </div>
  );
}

export default App;