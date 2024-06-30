import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pdf from './pages/Pdf';
import Pillar from './pages/Pillar';
import Limited from './pages/Limited';
import Divine from './pages/Divine';
import Overthrowing from './pages/Overthrowing';
import Angel from './pages/Angel';

const App = () => {
  return (
        <BrowserRouter>
          <Routes>
            <Route path={'/'} element={<Pdf />} />
            <Route path={'/pillar'} element={<Pillar />} />
            <Route path={'/limited'} element={<Limited />} />
            <Route path={'/divine'} element={<Divine />} />
            <Route path={'/overthrowing'} element={<Overthrowing />} />
            <Route path={'/angel'} element={<Angel />} />



          </Routes>
        </BrowserRouter>
  );
};

export default App;
