import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './app';
import './index.css';
import { SideBar } from './components/sidebar';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className='flex h-screen px-10 py-6'>
        <SideBar />
        <App />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
);
