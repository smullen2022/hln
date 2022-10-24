import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import { UserContext } from '../userContext/UserContext';
import styles from './styles.module.css';

const LoggedInUser = () => {
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
