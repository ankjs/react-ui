import type {RouterLayoutProps} from '../../types/browserRouterTypes'
import { Outlet } from "react-router-dom";

const RootLayout = ({ children }:RouterLayoutProps) => {
  return (
    <>
      <Outlet />
      {children}
    </>
  );
};
export default RootLayout;
