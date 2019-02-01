import React from 'react'

const TaskForm = ({handleChange, inputValue, handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Task"
        onChange={handleChange}
        value={inputValue}/>
      <button>Add</button>
    </form>
  )
}

export default TaskForm
