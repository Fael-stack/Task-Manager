import { ChevronRightIcon, SquareXIcon } from "lucide-react";
import { DeleteIcon } from "lucide-react";

function Tasks(props) {
  return (
    <ul className="space-y-4 p-6 rounded-md shadow bg-slate-200">
      {props.tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => props.onTaskClick(task.id)}
            className={`bg-slate-400 w-full rounded-md text-white p-2 ${
              task.isCompleted ? "line-through" : ""
            }`}
          >
            {task.title}
            {task.isCompleted ? "completo" : "incompleto"}
          </button>
          <button className="bg-slate-400 text-left rounded-md text-white p-2">
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
