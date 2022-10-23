import React, { useContext } from 'react';
import { UserContext } from '../userContext/UserContext';

interface ILoggedInUserProps {}

const LoggedInUser: React.FunctionComponent<ILoggedInUserProps> = () => {
  const { user, logOut } = useContext(UserContext);
  return user ? (
    <div>
      <span>{`${user.firstName} ${user.lastName}`}</span>
      <button onClick={() => logOut && logOut()}>log out</button>
    </div>
  ) : null;
};

export default LoggedInUser;
