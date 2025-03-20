import { useState } from "react";
import AddTask from "./components/AddTasks";
import Tasks from "./components/Tasks";
import "./index.css";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar React",
      description: "Pra ficar craque",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar CSS",
      description: "Pra ficar bonito",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar HTML",
      description: "Pra ficar estruturado",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>

        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
        <AddTask />
      </div>
    </div>
  );
}

export default App;
