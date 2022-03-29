import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  
  const [cat, catChanger] = useState("Code")
  const [details, detailsChanger] = useState("")

  function catHandler(e) {
    catChanger(e.target.value)
  }

  function detailsHandler(e) {
    detailsChanger(e.target.value)
  }

  function submitHandler(e) {
    e.preventDefault();
    const newTask = {
      text: details,
      category: cat
    }
    onTaskFormSubmit(newTask)
    catChanger("Code")
    detailsChanger("")
  }

  return (
    <form className="new-task-form" onSubmit={submitHandler}>
      <label>
        Details
        <input type="text" name="text" value={details} onChange={detailsHandler}/>
      </label>
      <label>
        Category
        <select name="category" value={cat} onChange={catHandler}>
          {categories.map((category) => {
            if(category !== "All") {
              return <option key={category} value={category}>{category}</option>
            }
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
