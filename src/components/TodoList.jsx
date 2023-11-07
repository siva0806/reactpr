import React from "react";
import { useState ,useId} from "react";

export default function TodoList() {

  const [input, setinput] = useState("");
  const [todolist, settodolist] = useState([
    {
      id: 1,
      task: "brush",
    },
    {
      id: 2,
      task: "eat"
    },
    {
      id: 3,
      task: "wrk"
    },
    {
      id: 4,
      task: "sleep"
    }
  ])



  const handlechange = (e) => {
    setinput(e.target.value);
  };

  const handleADD = () => {
    settodolist([...todolist, { id: 5, task: input }]);
    setinput("")
  };

  const handledelete = (did)=>{

    const deletetode = todolist.filter(todo=> todo.id !== did)
    settodolist(deletetode)

  }
  return (
    <div>

      <input
        placeholder="enter u r todo" value={input} 
        onChange={handlechange}
       
      />
      <button onClick={handleADD}>Add</button>

      {todolist.map((todo, index) => (

        <div key={index}>
            
          <h1>{todo.task}</h1>
          <button onClick={()=>handledelete(todo.id)}>x</button>
        </div>
      ))}

    </div>
  );
}



