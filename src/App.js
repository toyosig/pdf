import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pdf from './pages/Pdf';
import Pillar from './pages/Pillar';
import Limited from './pages/Limited';
import Divine from './pages/Divine';
import Overthrowing from './pages/Overthrowing';
import Angel from './pages/Angel';
import Hymn from './pages/Hymn';
import PillarImg from './pages/PillarImg';
import Use from './pages/Use';
import Heal from './pages/Heal';
import Positive from './pages/Positive';

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
            <Route path={'/hymn'} element={<Hymn />} />
            <Route path={'/pillarimg'} element={<PillarImg />} />
            <Route path={'/use'} element={<Use />} />
            <Route path={'/heal'} element={<Heal />} />
            <Route path={'/positive'} element={<Positive />} />





          </Routes>
        </BrowserRouter>
  );
};

export default App;
