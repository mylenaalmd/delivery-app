import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Provider from './context/Provider';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css';

function App() {
  return (
    <Provider>
      <Routes>
        <Route exact path="/" element={ <Login /> } />
        <Route exact path="/register" element={ <Register /> } />
        <Route exact path="/customer/products" element={ <Register /> } />
      </Routes>
    </Provider>
  );
}

export default App;
