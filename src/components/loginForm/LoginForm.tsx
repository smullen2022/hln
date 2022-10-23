import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../userContext/UserContext';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from './LoginForm.module.css';

type UserInfo = {
  username: string;
  password: string;
};

export const LoginForm = () => {
  const [loginInfo, setLoginInfo] = useState<UserInfo>({
    username: '',
    password: ''
  });
  const { user, logOn, error } = useContext(UserContext);
  const navigate = useNavigate();
  const submit = (e: any) => {
    e.preventDefault();
    logOn && logOn(loginInfo);
  };
  const inputStyle = {
    width: '100%',
    '& .MuiInputBase-root': {
      overflow: 'hidden'
    },
    marginBottom: '1.5rem'
  };

  useEffect(() => {
    if (user) navigate('/wood-warehouse');
  }, [navigate, user]);

  console.log(error);

  return (
    <div>
      <h2 style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Welcome to the HLN Front-end Challenge!</h2>
      <form onSubmit={submit}>
        <div className={styles.formBody}>
          <div className={styles.formFields}>
            <h3>Please Log In</h3>
            <TextField
              id="email"
              label="Email"
              error={error === 'User not found'}
              helperText={error === 'User not found' && error}
              sx={inputStyle}
              onChange={(e) => setLoginInfo((state) => ({ ...state, username: e.target.value }))}
            />
            <TextField
              id="password"
              label="Password"
              type="password"
              error={error === 'Login failed'}
              helperText={error === 'Login failed' && error}
              sx={inputStyle}
              onChange={(e) => setLoginInfo((state) => ({ ...state, password: e.target.value }))}
            />
          </div>
          <div className={styles.formFooter}>
            <Button
              type="submit"
              variant="contained"
              {...((!loginInfo.username || !loginInfo.password) && { disabled: true })}
            >
              Log in
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};
