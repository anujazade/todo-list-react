import {useState} from "react";

function InputBox(props) {
    const {handleTask}=props;

    const [inputValue, setValue] = useState("");
    
   const handleValue = (e) => {
    setValue(e.target.value);
   };

   const handleAdd=()=>{
       handleTask(inputValue);
       setValue("");
   }
   
  return (
    <div>
      <div className="inputBox">
        <input
          type="text"
          placeholder="Enter your task"
          value={inputValue} // state
          onChange={handleValue} //fn
        />

        <button onClick={handleAdd}>Add Task</button>
      </div>
    </div>
  );
}

export default InputBox;
