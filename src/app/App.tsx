import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from './styles.module.css';
import { WoodWarehouse } from '../pages/woodWarehouse/WoodWarehouse';
import { LoginForm } from '../pages/loginForm/LoginForm';
import LoggedInUser from '../components/loggedInUser/LoggedInUser';
import { ApolloProvider } from '@apollo/client';
import { client } from './client';
import { UserContextProvider } from '../components/userContext/UserContextProvider';

const App = () => {
  return (
    <div className={styles.App}>
      <ApolloProvider client={client}>
        <UserContextProvider>
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
        </UserContextProvider>
      </ApolloProvider>
    </div>
  );
};

export default App;
