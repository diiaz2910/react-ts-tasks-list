import Task from "./task";

type TasksList = {
  taskList: string[];
  deleteTask: (index: number) => void;
};

const TasksList = ({ taskList, deleteTask }: TasksList) => {
  return (
    <div className="taskList">
      {taskList.map((task, index) => (
        <Task key={index} task={task} deleteTask={() => deleteTask(index)} />
      ))}
    </div>
  );
};

export default TasksList;
