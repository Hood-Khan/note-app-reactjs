import React, { useState } from "react";
import { Plus, X } from "lucide-react";

function App() {
  const [show, setShow] = useState(false);

  const [inputValues, setInputValues] = useState({
    title: "",
    desc: "",
  });

  const [tasks, setTasks] = useState([]);

  const HandleSubmit = (e) => {
    e.preventDefault();

    // Empty title nahi hona chahiye
    if (inputValues.title.trim() === "") return;

    // Add new task
    setTasks([...tasks, inputValues]);

    // Modal close
    setShow(false);

    // Inputs reset
    setInputValues({
      title: "",
      desc: "",
    });
  };
  console.log(tasks);

  const handleInputs = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-zinc-900 text-white w-full min-h-screen p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8">My Notes App</h1>

      {/* Notes Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">

        {/* Add Note Card */}
        <div
          onClick={() => setShow(true)}
          className="cursor-pointer min-h-28 bg-zinc-700 border-2 border-blue-400 border-dashed rounded-2xl 
          p-6 flex flex-col items-center justify-center gap-3 hover:bg-zinc-600 hover:border-blue-300 
          transition-all shadow-md hover:shadow-xl"
        >
          <Plus className="w-12 h-12 p-3 bg-blue-600 rounded-full shadow-lg" />
          <p className="text-lg font-semibold">Add a new note</p>
        </div>

        {/* Notes Display */}
        {tasks.map((item, index) => (
          <div
            key={index}
            className="bg-zinc-800 border border-zinc-700 rounded-2xl p-5 shadow-md hover:shadow-xl 
            transition-all group min-h-40"
          >
            <h3 className="text-xl font-bold mb-2 text-blue-300 group-hover:text-blue-400 transition">
              {item.title}
            </h3>
            <p className="text-zinc-300">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {show && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
          <div className="w-[420px] bg-zinc-800 rounded-2xl border border-zinc-700 p-6 shadow-2xl relative">

            {/* Close Button */}
            <button
              onClick={() => setShow(false)}
              className="absolute top-3 right-3 text-zinc-400 hover:text-white transition"
            >
              <X />
            </button>

            <h3 className="text-xl font-bold mb-4 text-center text-blue-300">Add a New Note</h3>

            <form className="flex flex-col gap-4" onSubmit={HandleSubmit}>
              <input
                type="text"
                placeholder="Enter Title"
                className="border border-zinc-600 bg-zinc-900 rounded-xl p-3 text-white 
                focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                onChange={handleInputs}
                name="title"
                value={inputValues.title}
              />

              <textarea
                rows="6"
                placeholder="Enter Description"
                className="border border-zinc-600 bg-zinc-900 rounded-xl p-3 text-white 
                focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                onChange={handleInputs}
                name="desc"
                value={inputValues.desc}
              ></textarea>

              <button
                className="bg-blue-600 hover:bg-blue-700 transition p-3 rounded-xl w-full font-semibold 
                shadow-md active:scale-95"
              >
                Add Note
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
