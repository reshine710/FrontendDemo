import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SidebarLayout from './layouts/SidebarLayout';
import Home from './pages/Home';
import Stopwatch from './pages/Stopwatch';
import List from './pages/List';
import Firework from './pages/Firework';
import './style.css';

// 設定網站標題，取自環境變數
if (import.meta.env.VITE_APP_TITLE) {
  document.title = import.meta.env.VITE_APP_TITLE;
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <SidebarLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stopwatch" element={<Stopwatch />} />
          <Route path="/list" element={<List />} />
          <Route path="/firework" element={<Firework />} />
        </Routes>
      </SidebarLayout>
    </BrowserRouter>
  </React.StrictMode>
);
