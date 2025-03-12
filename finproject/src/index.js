import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom"
import { AuthContextProvider } from './context/AuthContextProvider';
import { DataProvider } from './context/DataContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <DataProvider>
      <Router>
        <App />
      </Router>
    </DataProvider>
  </AuthContextProvider>
);

