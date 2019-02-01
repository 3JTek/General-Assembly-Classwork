import React from 'react'

const Task = ({ todos }) => {
  return(
    <ol>
      {todos.map((task, index) => <li className={task.completed ? 'completed' : ''} key={index}>{task.task}</li>)}
    </ol>
  )
}

export default Task
