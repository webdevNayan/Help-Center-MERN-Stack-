import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HelpCenter from './pages/HelpCenter';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={HelpCenter} />
      </Routes>
    </BrowserRouter>
  );
}
