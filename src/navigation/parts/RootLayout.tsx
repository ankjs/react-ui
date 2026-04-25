import { Fragment } from "react";
import type {RouterLayoutProps} from '../../types/browserRouterTypes';
import {
  ScrollRestoration,
  Outlet
} from "react-router-dom";



const RootLayout = ({ children }:RouterLayoutProps) => {
  return (
    <Fragment>
      <ScrollRestoration
        getKey={(location) => location.pathname}
      />

      {/* Navbar / Top UI */}
      {children}

      {/* Page Content */}
      <Outlet />
    </Fragment>
  );
};
export default RootLayout;
