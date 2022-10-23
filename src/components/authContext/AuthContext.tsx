import React, { createContext } from 'react';
import { User } from '../../types/graphql';

interface AuthContextProps {
  user?: User;
  logOut?: boolean;
}

export const AuthContext = createContext<AuthContextProps>({});
