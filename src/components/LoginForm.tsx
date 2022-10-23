import React from 'react';

export const LoginForm = () => {
  // Implement the login functionality so after logging in the user can be read using the 'user' query.
  const user = undefined;
  return !user ? (
    <form>
      <div style={{ margin: '1rem 10rem' }}>
        <p style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Welcome to the HLN Front-end Challenge</p>
        <p style={{ color: '#007500', fontWeight: 'bold', textAlign: 'left' }}>
          Please add styling to this page/form and connect the Login form action to use the <code>login</code> mutation.
          Errors will be returned from the login mutation when the email/username submitted is the literal value{' '}
          <i>non-existing</i> or the password submitted is <i>nope</i>. Any other username password combination will be
          treated as a successful login.
        </p>
        <p style={{ color: '#007500', fontWeight: 'bold', textAlign: 'left' }}>
          Style however you feel looks best and consider the user experience. You may add 3rd party libraries to help
          style the controls, or for providing other time-saving utilities, but make sure they are properly added as
          dependencies via yarn commands, and also take into account the final bundle size. You are also free to
          completely replace anything already defined in this application and add, remove, or move elements as you see
          fit, as long as the components perform the required functionality.
        </p>
        <p style={{ color: '#007500', fontWeight: 'bold', textAlign: 'left' }}>
          Avoid modifying the <i>mocks</i> directory since that exists to provide the simulated back-end functionality
          that your app will interact with. For reference, the GraphQL API schema that you'll be interfacing with is
          defined in <i>src/types/schema.graphql</i> and the mutations and queries you'll be using are already defined
          in <i>src/data</i>.
        </p>
        <label htmlFor="username">Email:</label>
        <input id="username" name="username" />
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" />
        <button type="submit">Login</button>
      </div>
    </form>
  ) : null;
};
