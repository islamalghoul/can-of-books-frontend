
import Button from 'react-bootstrap/Button';

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function LoginButton() {
  const {
    isAuthenticated,
    loginWithRedirect,
  } = useAuth0();

  return !isAuthenticated && (
    <Button variant="primary" type="submit"onClick={loginWithRedirect}>
 Log In
 </Button>
    
  );
}

export default LoginButton;