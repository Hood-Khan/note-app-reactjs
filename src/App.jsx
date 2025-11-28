import React from 'react';

function App() {
  return (
    <div className="bg-zinc-900 text-white w-full min-h-screen p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8">My Cards</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl bg-amber-500">
        <div className="card min-h-20 bg-zinc-600 border border-white rounded-2xl p-4 flex items-center justify-center hover:bg-zinc-500 transition-colors">
          Card 1
        </div>
        <div className="card min-h-20 bg-zinc-600 border border-white rounded-2xl p-4 flex items-center justify-center hover:bg-zinc-500 transition-colors">
          Card 2
        </div>
        <div className="card min-h-20 bg-zinc-600 border border-white rounded-2xl p-4 flex items-center justify-center hover:bg-zinc-500 transition-colors">
          Card 3
        </div>
        <div className="card min-h-20 bg-zinc-600 border border-white rounded-2xl p-4 flex items-center justify-center hover:bg-zinc-500 transition-colors">
          Card 4
        </div>
        <div className="card min-h-20 bg-zinc-600 border border-white rounded-2xl p-4 flex items-center justify-center hover:bg-zinc-500 transition-colors">
          Card 5
        </div>
      </div>
    </div>
  );
}

export default App;
