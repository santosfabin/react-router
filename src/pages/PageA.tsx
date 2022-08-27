import { Outlet } from 'react-router-dom';
export function PageA() {
  return (
    <div>
      <h1>Pagina A</h1>
      <Outlet />
    </div>
  );
}
