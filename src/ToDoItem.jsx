import { react, useState } from "react";

function ToDoItem(props) {

    const [isDone, setIsDone] = useState(false)

    function handleClick() {
        setIsDone((prevValue)=> {
            return !prevValue;
        } )
    }

    return (
    <div onClick={()=>{handleClick();}} >
    <li style={{textDecoration:isDone ? "line-through" : "none" }}>{props.text}</li>
   <button onClick={()=>{props.onChecked(props.id);  }} style ={{position: "relative",  right: "100px", marginBottom: "30px" }} className="delete">DELETE</button>
    </div>
    );
}

export default ToDoItem;


