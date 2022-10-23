import React from 'react';
import { PropsWithChildren } from 'react';
import { AuthContext } from './AuthContext';

export const AuthContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
