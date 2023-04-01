import { react, useState } from "react";

function ToDoItem(props) {

        return (
    <div onClick={e =>{ props.markComplete(props.id, props.item.isDone); e.stopPropagation();}} >
    <li style={{textDecoration:props.item.isDone ? "line-through" : "none" }}>{props.item.text}</li>
   <button onClick={(e)=>{props.onChecked(props.id,props.item.isDone);e.stopPropagation();  }} style ={{position: "relative",  right: "100px", marginBottom: "30px" }} className="delete">DELETE</button>
    </div>
    );
}

export default ToDoItem;