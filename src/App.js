
import Dashboard from './components/Dashboard';
import React, { useState, useEffect } from 'react';

function App() {

  const [darkMode, setDarkMode] = useState(false);

 
  useEffect(() => {
    const savedDarkMode = JSON.parse(localStorage.getItem('dark-mode'));
    if (savedDarkMode) {
      setDarkMode(savedDarkMode);
    }
  }, []);

  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('dark-mode', JSON.stringify(!darkMode));
  };

  return (
    <div>
    <span className={darkMode ? 'dark' : ''}>
    <div className="min-h-screen bg-gray-100 dark:bg-gray-700">
      <header className="bg-white shadow p-4 flex dark:bg-gray-800">
      
     
   
   <button
     onClick={toggleDarkMode}
     className="px-4 py-2 bg-gray-700 dark:bg-white text-white rounded w-14"
   >
     {darkMode ? '☀' : '☾'}
   </button>


<h1  className="text-2xl  font-semibold text-gray-700 dark:text-white mx-4">
          Dashboard
        </h1>

      </header>

 

      <main className="p-6">
     
        <Dashboard />
      </main>
    </div></span></div>
  );
}

export default App;
