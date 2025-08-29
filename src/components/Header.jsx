import React from 'react';
import ThemeToggle from './ThemeToggle.jsx';

function Header({ activeId, content }) {
  const tabs = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];
  
  return (
    <header className="site-header" role="banner">
      <div className="container nav-inner">
        <div className="brand">{content.name}</div>
        <nav aria-label="Primary">
          <ul>
            {tabs.map((t) => (
              <li key={t.id}>
                <a
                  className={`tab ${activeId === t.id ? "active" : ""}`}
                  aria-current={activeId === t.id ? "page" : undefined}
                  href={`#${t.id}`}
                >
                  {t.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Header;
