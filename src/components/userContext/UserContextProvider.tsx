import React, { useEffect, useMemo, useState } from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { PropsWithChildren } from 'react';
import { LOGIN, LOGOUT, USER } from '../../constants/graphQlContants';
import { UserContext } from './UserContext';
import { LoginMutationVariables, User } from '../../types/graphql';

export const UserContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [login, { loading, error, data: loginData }] = useMutation(LOGIN);
  const [logout] = useMutation(LOGOUT);
  const { data } = useQuery(USER);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const newUser = data?.user || loginData?.login;
    setUser(newUser);
  }, [data?.user, loginData?.login]);

  const userData = useMemo(() => {
    const logOn = (loginInfo: LoginMutationVariables) => login({ variables: loginInfo });
    const logOut = () => {
      logout();
      setUser(undefined);
    };
    return {
      user,
      logOn,
      logOut,
      loading,
      error: !!error
    };
  }, [user, loading, error, login, logout]);

  return <UserContext.Provider value={userData}>{children}</UserContext.Provider>;
};
