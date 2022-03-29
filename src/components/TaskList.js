import React from "react";
import Task from "./Task";

function TaskList({tasks, changerOfTasks}) {
  
  function taskDeleterHandler(deleteText) {
    const newTasks = tasks.filter((i) => i.text !== deleteText.text)
    changerOfTasks(newTasks);
  }
  
  return (
    <div className="tasks">
      {tasks?.map((task)=> {
        return <Task key={task.text} taskDeleter={taskDeleterHandler} text={task.text} category={task.category} />
      })}
    </div>
  );
}

export default TaskList;
