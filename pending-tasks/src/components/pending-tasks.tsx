import { useState } from "react";
import TasksList from "./list-tasks";

export const TasksPending = () => {
  const [newTask, setNewTask] = useState<string>("");
  const [taskList, setTaskList] = useState<string[]>([]);

  const handleAddTask = () => {
    if (newTask.trim() === "") return;
    setTaskList((previousTasks) => [...previousTasks, newTask]);
    setNewTask("");
  };

  const handleDeleteTask = (index: number) => {
    setTaskList((tasks) => tasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Tasks List</h1>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="New Task"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <TasksList taskList={taskList} deleteTask={handleDeleteTask} />
    </div>
  );
};

export default TasksPending;
