import { ChevronRightIcon, SquareXIcon } from "lucide-react";
import { DeleteIcon } from "lucide-react";
import { Navigate, useNavigate } from "react-router-dom";

function Tasks(props) {
  const nav = useNavigate();

  function onSeeDetails(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);

    nav("/task?$(query.toString()}");
  }

  return (
    <ul className="space-y-4 p-6 rounded-md shadow bg-slate-200">
      {props.tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => props.onTaskClick(task.id)}
            className={`bg-slate-400 w-full rounded-md text-white text-left p-2 ${
              task.isCompleted ? "line-through" : ""
            }`}
          >
            {task.title}
          </button>
          <button
            onClick={() => onSeeDetails(task)}
            className="bg-slate-400 text-left rounded-md text-white p-2"
          >
            <ChevronRightIcon />
          </button>
          <button
            onClick={() => props.onDeleteTaskClick(task.id)}
            className="bg-slate-400 text-left rounded-md text-white p-2"
          >
            <DeleteIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
