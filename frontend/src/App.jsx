import React, { useState } from 'react';

const phasesData = [
  {
    id: 0,
    title: 'Phase 0: Developer Setup & HTML/CSS',
    tech: 'Git, CLI, HTML5, CSS Flexbox & Responsive Design',
    notes: [
      'Git Workflow: `git init`, `git add .`, `git commit -m "msg"`, `git push origin main`.',
      'HTML5 Layouts: Semantic elements (`<header>`, `<main>`, `<section>`, `<footer>`).',
      'CSS Styling: Flexbox (`display: flex`, `justify-content`, `align-items`) and CSS Grid for modern layouts.',
      'Responsive Web Design: Media queries (`@media (min-width: 768px)`) to support mobile and desktop views.'
    ]
  },
  {
    id: 1,
    title: 'Phase 1: JS & DOM Manipulation',
    tech: 'Vanilla JS, DOM Events, Fetch API, JSON-Server',
    notes: [
      'JS Core: Arrow functions, scope, template literals, and array iterators (`map`, `filter`, `forEach`, `reduce`).',
      'DOM Selection & Manipulation: `document.querySelector()`, `addEventListener()`, dynamic element creation with `createElement()`.',
      'Asynchronous JS: `fetch(url)` with standard Promises `.then()` and modern `async/await` syntax.',
      'Mock Backend: Setting up `json-server --watch db.json` for rapid SPA CRUD prototyping.'
    ]
  },
  {
    id: 2,
    title: 'Phase 2: React Web Development',
    tech: 'JSX, State & Props, React Hooks, React Router',
    notes: [
      'React Components: Functional components returning JSX markup.',
      'State Management: `useState()` hook for dynamic UI state updates and interactive re-renders.',
      'Side Effects: `useEffect()` hook for asynchronous data fetching and cleanup tasks.',
      'Client Routing: `BrowserRouter`, `Routes`, `Route`, and `Link` components from `react-router-dom` for SPAs.'
    ]
  },
  {
    id: 3,
    title: 'Phase 3: Python & Relational DBs',
    tech: 'Python OOP, SQL, Flask-SQLAlchemy, REST APIs',
    notes: [
      'Python OOP: Classes, `__init__` constructor methods, instance attributes, and class inheritance.',
      'SQL & Schema Design: Primary/Foreign keys, one-to-many, and many-to-many relationship mapping.',
      'ORMs: Flask-SQLAlchemy for converting database tables into declarative Python classes.',
      'REST APIs: Designing CRUD routes with Flask returns using standard HTTP verbs (`GET`, `POST`, `PATCH`, `DELETE`).'
    ]
  },
  {
    id: 4,
    title: 'Phase 4: Full Stack & Authentication',
    tech: 'JWT Auth, Password Hashing, Render & Vercel Deployment',
    notes: [
      'Authentication: Password hashing with `Bcrypt` and secure token generation using JSON Web Tokens (JWT).',
      'CORS Setup: Configuring `Flask-CORS` to allow frontend domain requests to backend endpoints.',
      'Deployment: Hosting Python Flask APIs on Render/Heroku and React SPA frontends on Vercel/Netlify.',
      'Agile Teamwork: Group capstone projects managed via Git branching, GitHub Pull Requests, and Kanban boards.'
    ]
  }
];

export default function App() {
  const [expandedId, setExpandedId] = useState(null);
  const [completed, setCompleted] = useState([]);

  const toggleExpand = (id) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  const toggleComplete = (e, id) => {
    e.stopPropagation(); // Prevents card opening/closing when clicking the status button
    setCompleted(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div style={{ backgroundColor: '#0f172a', color: '#f8fafc', minHeight: '100vh', padding: '2rem' }}>
      <div style={{ maxWidth: '850px', margin: '0 auto' }}>
        <header style={{ borderBottom: '1px solid #334155', paddingBottom: '1rem', marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#38bdf8', margin: 0 }}>
            Moringa SE Curriculum Companion
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginTop: '0.5rem' }}>
            Click on any phase to expand core study notes and track your progress.
          </p>
        </header>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {phasesData.map((phase) => {
            const isDone = completed.includes(phase.id);
            const isOpen = expandedId === phase.id;

            return (
              <div 
                key={phase.id} 
                onClick={() => toggleExpand(phase.id)}
                style={{
                  backgroundColor: isDone ? '#064e3b' : '#1e293b',
                  border: isOpen ? '2px solid #38bdf8' : (isDone ? '1px solid #10b981' : '1px solid #334155'),
                  borderRadius: '0.75rem',
                  padding: '1.25rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: isOpen ? '0 10px 15px -3px rgba(0, 0, 0, 0.3)' : 'none'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: '600', color: '#f8fafc', margin: 0 }}>
                      {phase.title}
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginTop: '0.3rem', margin: 0 }}>
                      {phase.tech}
                    </p>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <button
                      onClick={(e) => toggleComplete(e, phase.id)}
                      style={{
                        backgroundColor: isDone ? '#059669' : '#334155',
                        color: '#ffffff',
                        border: 'none',
                        padding: '0.35rem 0.85rem',
                        borderRadius: '9999px',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        cursor: 'pointer'
                      }}
                    >
                      {isDone ? '✓ Completed' : 'Mark Done'}
                    </button>
                    <span style={{ color: '#38bdf8', fontSize: '1rem', fontWeight: 'bold' }}>
                      {isOpen ? '▲' : '▼'}
                    </span>
                  </div>
                </div>

                {/* Expanded Study Notes Section */}
                {isOpen && (
                  <div 
                    style={{
                      marginTop: '1.25rem',
                      paddingTop: '1rem',
                      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#cbd5e1'
                    }}
                  >
                    <h4 style={{ fontSize: '0.95rem', fontWeight: '600', color: '#38bdf8', marginBottom: '0.75rem' }}>
                      📖 Key Concepts & Study Notes:
                    </h4>
                    <ul style={{ margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {phase.notes.map((note, idx) => (
                        <li key={idx} style={{ fontSize: '0.88rem', lineHeight: '1.4' }}>
                          {note}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}