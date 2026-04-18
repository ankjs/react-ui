import BrowserRouter from './BrowserRouter';
import React from 'react';
import type { RouterProtectProps } from '../types/browserRouterTypes'
import {
  Navigate,
  useLocation,
} from 'react-router-dom';



const AuthGuard: React.FC<RouterProtectProps> = ({
  children,
  isAllowed = false,
  redirectTo = "/login"
}) => {
  const location = useLocation();

  if (!children) {
    throw new Error(
      ` Router Element is undefined; add like this 
      <BrowserRouter
        routers=[{
          path : "/"
          👉 element: <div>Home components</div> // misusing 
        }, {...}]
      />
    `
    )
  };

  if (!isAllowed) {
    return <Navigate 
    to={redirectTo}
    state={{ from: location }} 
    replace
    />;
  };

  return <>{children}</>;
};
export default AuthGuard;

