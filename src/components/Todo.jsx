import { useState } from "react";
import InputBox from "./InputBox";
import List from "./List";

function Todo() {
  const [tasksArr, setTasksArr] = useState(["data1", "data2"]);
  console.log("todo is rendered");
  
  const handleTask = (inputValue) => {
    let newTasksArr = [...tasksArr, inputValue];
    console.log(newTasksArr);
    setTasksArr(newTasksArr);
    
  }

  const handlDelete=(id)=>{
    //filter task with id 
    console.log("delete")
    let remainingTaks=tasksArr.filter((task,idx)=>idx!=id)
    setTasksArr(remainingTaks);
  }
  console.log("IB is rendered");
  return (
    <div>
      <p>Enter Items in List :</p>
      <InputBox handleTask={handleTask}>
      </InputBox>
      <List tasksArr={tasksArr}
      handlDelete={handlDelete}>
      </List>
    </div>
  );
}

export default Todo;
