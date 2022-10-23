import React, { useContext } from 'react';
import { UserContext } from './userContext/UserContext';

interface ILoggedInUserProps {}

const LoggedInUser: React.FunctionComponent<ILoggedInUserProps> = () => {
  const { user } = useContext(UserContext);
  return <div>{user?.username}</div>;
};

export default LoggedInUser;
