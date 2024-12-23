import { useState, useEffect } from 'react';

export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <button
      className="p-2 bg-gray-300 dark:bg-gray-700 rounded"
      onClick={() => setIsDarkMode(!isDarkMode)}
    >
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}