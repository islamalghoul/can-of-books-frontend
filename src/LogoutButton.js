import Button from 'react-bootstrap/Button';
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
    
function LogoutButton() {
  const {
    isAuthenticated,
    logout,
  } = useAuth0();

  return isAuthenticated && (
  
    <Button variant="primary" type="submit" onClick={() => {
        logout({ returnTo: window.location.origin });
      }}>
      Log Out
     </Button>
  );
}

export default LogoutButton;