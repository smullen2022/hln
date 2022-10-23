import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import { UserContext } from '../userContext/UserContext';
import styles from './LoggedInUser.module.css';

interface ILoggedInUserProps {}

const LoggedInUser: React.FunctionComponent<ILoggedInUserProps> = () => {
  const { user, logOut } = useContext(UserContext);
  const buttonStyle = {
    lineHeight: '1rem',
    fontSize: '.75rem',
    marginLeft: '.5rem'
  };
  return user ? (
    <div className={styles.loggedInContainer}>
      <span>{`Welcome, ${user.firstName} ${user.lastName}`}</span>
      <Button sx={buttonStyle} onClick={() => logOut && logOut()}>
        Log out
      </Button>
    </div>
  ) : null;
};

export default LoggedInUser;
