// src/App.js
import React from "react";
import PlayersList from "./PlayersList";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* App Title */}
      <header className="bg-blue-600 shadow-md">
        <h1 className="text-white text-4xl font-bold text-center py-6">
          FIFA Player Cards
        </h1>
      </header>

      {/* Player List */}
      <main className="max-w-7xl mx-auto p-6">
        <PlayersList />
      </main>

      {/* Footer */}
      <footer className="text-center py-4 text-gray-500 text-sm">
        © {new Date().getFullYear()} FIFA Cards — Built with React & Tailwind
        CSS
      </footer>
    </div>
  );
}

export default App;
