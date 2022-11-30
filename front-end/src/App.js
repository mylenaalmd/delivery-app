import React from 'react';
// import { Switch, Route } from 'react-router-dom';
// import { Provider } from './context/Provider';
import Login from './pages/Login';
import './App.css';

function App() {
  return (
    <Login />
    // <Switch>
    //   <Provider>
    //     <Route exact path="/" component={ Login } />
    //   </Provider>
    // </Switch>
  );
}

export default App;
