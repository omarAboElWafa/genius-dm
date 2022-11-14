import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AuthContextProvider from './contexts/AuthContext';
import DataContextProvider from './admin/contexts/DataContext';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <DataContextProvider>
          <App />
        </DataContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
