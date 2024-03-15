import React from 'react'

function List(props) {
    const {tasksArr, handlDelete}=props;
    console.log("List is rendered");
  return (
    <div className="list">
      <ul>
        {tasksArr.map((task,idx) => (
          <li onClick={()=>handlDelete(idx)} key={idx}>
              {task}</li>
        ))}
      </ul>
    </div>
  )
}

export default List