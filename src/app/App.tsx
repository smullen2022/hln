import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import { WoodWarehouse } from '../components/WoodWarehouse';
import { LoginForm } from '../components/LoginForm';
import LoggedInUser from '../components/LoggedInUser';
import { AuthContextProvider } from '../components/authContext/AuthContextProvider';

const App = () => {
  return (
    <div className={styles.App}>
      <AuthContextProvider>
        <header className={styles['App-header']}>
          <img src="/hln-logo.png" className={styles['App-logo']} alt="logo" />
          <LoggedInUser />
        </header>
        <div>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LoginForm />} />
              <Route path="/wood-warehouse" element={<WoodWarehouse />} />
            </Routes>
          </BrowserRouter>
        </div>
      </AuthContextProvider>
    </div>
  );
};

export default App;
