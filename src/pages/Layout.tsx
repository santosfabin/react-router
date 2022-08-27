import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';

export function Layout() {
  const navigate = useNavigate();
  return (
    <div>
      <p>Seja bem vindo</p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa,
        laborum. Impedit qui, vero culpa iusto saepe assumenda doloremque
        ducimus harum quos necessitatibus officia omnis consequatur dignissimos
        recusandae ab! Doloremque, id.
      </p>
      <ul>
        <Link to="/">Home</Link>
        <br />
        <Link to="/a">PageA</Link>
        <br />
        <button onClick={() => navigate('/b', { replace: true })}>
          Page B
        </button>
        <br />
        <button onClick={() => navigate('/a/c', { replace: true })}>
          Page C
        </button>
        <Outlet />
      </ul>
    </div>
  );
}
