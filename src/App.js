import  { react, useState } from "react";
import ToDoItem from "./ToDoItem";
import './App.css';

function App() {

  const[inputText, setInputText] = useState("");
  const[items, setItems] = useState([]);
  const[count, setCount]= useState(0)


  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue); 
  }

  function addItem () {
    setItems((prevItems)=> {
      return [...prevItems, inputText];
    });
    setInputText("")
  }

  function deleteItem(id) {
    setItems((prevItems)=>{
      return prevItems.filter(
        (item, index) => {
          return index != id
        }
      )
    });
  }

 

  function remainingTask() {
    setCount(count + 1);
  }

  function deletedTask() {
    if (count > 0) {
      setCount(counter => counter - 1);
    }
   
  }



  return (
    <div className="container">
      <div className="heading">
        <h1>TO-DO-LIST</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" className="text" value={inputText} />
        <button onClick={()=>{addItem(); remainingTask();}}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
         {items.map((todoItem, index) => (
          <ToDoItem
          key={index}
          id ={index}
          onChecked ={deleteItem}
          onDeleteTask ={ deletedTask}
           text ={todoItem}  />
          ))}
        </ul>
      </div>
      <h4>Remaining Task: {count}</h4>
      <h4>Completed Task: </h4>
    </div>
  );
 
}

export default App;