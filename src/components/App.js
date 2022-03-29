import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [selectedButton, buttonSelector] = useState("All")
  const [taskers, changeTasks] = useState(TASKS)

  function changeButton(e) {
    buttonSelector(e.category)
    const newTasks = [...taskers]
    if(e.category === "All") {
      changeTasks(TASKS)
    } else{
      const newerTasks = newTasks.filter((task) => task.category === e.category)
      changeTasks(newerTasks)
    }
  }

  function submitter(newTask) {
    const newTasks = [...taskers, newTask]
    changeTasks(newTasks)
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedButton} categorySelector={changeButton}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={submitter}/>
      <TaskList filter={selectedButton} changerOfTasks={changeTasks} tasks={taskers} />
    </div>
  );
}

export default App;
