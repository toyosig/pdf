import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pdf from './pages/Pdf';

const App = () => {
  return (
        <BrowserRouter>
          <Routes>
            <Route path={'/'} element={<Pdf />} />
          </Routes>
        </BrowserRouter>
  );
};

export default App;
