import React from 'react';
import Sidebar from './Sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Ranking from './Ranking';
import Galeria from './Galeria';
import Regras from './Regras';

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Ranking />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/regras" element={<Regras />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
