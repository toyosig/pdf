import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pdf from './pages/Pdf';
import Pillar from './pages/Pillar';
import Limited from './pages/Limited';

const App = () => {
  return (
        <BrowserRouter>
          <Routes>
            <Route path={'/'} element={<Pdf />} />
            <Route path={'/pillar'} element={<Pillar />} />
            <Route path={'/limited'} element={<Limited />} />


          </Routes>
        </BrowserRouter>
  );
};

export default App;
