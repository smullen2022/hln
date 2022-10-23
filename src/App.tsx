import React from 'react';
import logo from './hln-logo.png';
import './App.css';
import { WoodWarehouse } from './WoodWarehouse';
import { LoginForm } from './LoginForm';
import LoggedInUser from './LoggedInUser';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LoggedInUser />
      </header>
      <div>
        <LoginForm />
        <WoodWarehouse />
      </div>
    </div>
  );
};

export default App;
