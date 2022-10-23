import { useMutation } from '@apollo/client';
import React, { useContext } from 'react';
import { LOGOUT } from '../../constants/graphQlContants';
import { UserContext } from '../userContext/UserContext';

interface ILoggedInUserProps {}

const LoggedInUser: React.FunctionComponent<ILoggedInUserProps> = () => {
  const { user, logOut } = useContext(UserContext);
  return user ? (
    <div>
      <span>{`${user.firstName} ${user.lastName}`}</span>
      <button onClick={() => logOut && logOut()}>logOut</button>
    </div>
  ) : null;
};

export default LoggedInUser;
