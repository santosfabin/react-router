import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Layout } from '../src/pages/Layout';
import { PageA } from '../src/pages/PageA';
import { PageB } from '../src/pages/PageB';
import { PageC } from '../src/pages/PageC';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="a" element={<PageA />}>
            <Route path="c" element={<PageC />} />
          </Route>

          <Route path="b" element={<PageB />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
