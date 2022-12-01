import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Register from './pages/Register';
// import { Provider } from './context/Provider';
import Login from './pages/Login';
import './App.css';

function App() {
  return (
    // <Login />
    <BrowserRouter>
      {/* <Route exact path="/" component={ Login } /> */}
      <Route exact path="/login" component={ Login } />
      <Route exact path="/register" component={ Register } />
      <Route path="/" element={ <Redirect to="/login" /> } />
    </BrowserRouter>
  );
}

export default App;
