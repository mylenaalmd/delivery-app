import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Provider from './context/Provider';
import Login from './pages/Login';
import './App.css';

function App() {
  return (
    <Provider>
      <Routes>
        <Route exact path="/" element={ <Login /> } />
      </Routes>
    </Provider>
  );
}

export default App;
