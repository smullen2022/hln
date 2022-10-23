import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { USER } from '../constants/graphQlContants';

interface ILoggedInUserProps {}

const LoggedInUser: React.FunctionComponent<ILoggedInUserProps> = () => {
  const { data } = useQuery(USER);
  return <div>Add logged in user info</div>;
};

export default LoggedInUser;
