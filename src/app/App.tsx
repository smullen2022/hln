import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import { WoodWarehouse } from '../components/WoodWarehouse';
import { LoginForm } from '../components/LoginForm';
import LoggedInUser from '../components/LoggedInUser';
import { ApolloProvider } from '@apollo/client';
import { client } from './client';

const App = () => {
  return (
    <div className={styles.App}>
      <ApolloProvider client={client}>
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
      </ApolloProvider>
    </div>
  );
};

export default App;
