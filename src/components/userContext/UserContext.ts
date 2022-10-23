import { createContext } from 'react';
import { LoginMutationVariables, User } from '../../types/graphql';

interface UserContextProps {
  user?: User;
  logOn?: (loginInfo: LoginMutationVariables) => void;
  logOut?: () => void;
  loading?: boolean;
  error?: boolean;
}

export const UserContext = createContext<UserContextProps>({});
