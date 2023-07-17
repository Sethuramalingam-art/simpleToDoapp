import React, { useEffect, useState } from "react";

const Todo = () => {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState("");

  const handleAdd = () => {
    let taskObj = {
      id: 1,
      name: task,
    };
    taskList.push(taskObj);
    setTaskList([...taskList]);
  };

  const handleUpdate = (e) => {
    console.log(e.target.outerText);
    let a = taskList.filter((item) => item.name !== e.target.outerText);
    setTaskList([...a]);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleAdd}>Add Task</button>
      </div>
      {taskList.length !== 0
        ? taskList.map((task) => {
            return (
              <>
                <div value={task.name} onClick={(event) => handleUpdate(event)}>
                  {task.name}
                </div>
              </>
            );
          })
        : ""}
    </div>
  );
};

export default Todo;
