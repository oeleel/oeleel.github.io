import React, { useEffect, useState } from 'react';
import Button from './Button.jsx';

function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem("theme");
    if (stored) return stored;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches
      ? 'light' : 'dark';
  });
  
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  
  return (
    <Button aria-label="Toggle theme" className="icon-btn" onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}>
      {theme === "light" ? "🌞" : "🌙"}
    </Button>
  );
}

export default ThemeToggle;
