import React, { useEffect, useMemo, useState } from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { PropsWithChildren } from 'react';
import { LOGIN, LOGOUT, USER } from '../../constants/graphQlContants';
import { UserContext } from './UserContext';
import { LoginMutationVariables, User } from '../../types/graphql';

export const UserContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [login, { error, data: loginData, loading: loginLoading }] = useMutation(LOGIN);
  const [logout] = useMutation(LOGOUT);
  const { data, loading } = useQuery(USER);
  const [user, setUser] = useState<User>();
  const [loadingStarted, setLoadingStarted] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const newUser = data?.user || loginData?.login;
    setUser(newUser);
  }, [data?.user, loginData?.login]);

  // this is mostly here for cases where the user is refreshing the wood warehouse screen while logged in, to keep the login page
  // from flashing temporarily on the screen as that page uses the loeaded state to ensure the data for the user was loaded
  // before determining that that data is null
  useEffect(() => {
    if (loginLoading || loading) {
      setLoadingStarted(true);
    }
    if (!loginLoading && !loading && loadingStarted) {
      setLoaded(true);
    }
  }, [loginLoading, loading, loadingStarted]);

  const userData = useMemo(() => {
    const logOn = (loginInfo: LoginMutationVariables) => login({ variables: loginInfo });
    const logOut = () => {
      logout();
      setUser(undefined);
    };
    return {
      user,
      loaded,
      logOn,
      logOut,
      error: error?.message
    };
  }, [user, error, login, loaded, logout]);

  return <UserContext.Provider value={userData}>{children}</UserContext.Provider>;
};
