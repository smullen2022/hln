import { createContext } from 'react';
import { LoginMutationVariables, User } from '../../types/graphql';

interface UserContextProps {
  user?: User;
  loaded?: boolean;
  logOn?: (loginInfo: LoginMutationVariables) => void;
  logOut?: () => void;
  error?: string;
}

export const UserContext = createContext<UserContextProps>({});
