import React, { useMemo } from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { PropsWithChildren } from 'react';
import { LOGIN, USER } from '../../constants/graphQlContants';
import { UserContext } from './UserContext';
import { LoginMutationVariables } from '../../types/graphql';

export const UserContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [login, { loading, error, data: loginData }] = useMutation(LOGIN);
  const { data } = useQuery(USER);

  const userData = useMemo(() => {
    const logOn = (loginInfo: LoginMutationVariables) => login({ variables: loginInfo });
    return {
      user: data?.user || loginData?.login,
      logOn,
      loading,
      error: !!error
    };
  }, [data?.user, error, loading, login, loginData?.login]);

  return <UserContext.Provider value={userData}>{children}</UserContext.Provider>;
};
