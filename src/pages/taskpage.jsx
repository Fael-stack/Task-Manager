import { ChevronLeftIcon, DeleteIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TaskPage() {
  const nav = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="h-screen w-screen bg-slate-500 p-6">
      <h1>{title} </h1>
      <p>{description}</p>
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative m-6">
          <button
            onClick={() => nav(-1)}
            className="absolute left-0 top-0 bottom-0 text-slate-100"
          >
            <ChevronLeftIcon />
          </button>
        </div>
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Detalhes da Tarefa
        </h1>
        <div className="bg-slate-400 p-4 rounded-md">
          <h2 className="text-xl  font-bold text-slate-600">{title}</h2>
          <p className="text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
