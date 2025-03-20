function AddTask() {
  return (
    <div className="space-y-4 p-6 rounded-md shadow bg-slate-200 flex flex-col">
      <input
        type="text"
        placeholder="Digite o nome da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
      ></input>
      <input
        type="text"
        placeholder="Digite a descrição da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
      ></input>
      <button className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium">
        Adicionar
      </button>
    </div>
  );
}
export default AddTask;
