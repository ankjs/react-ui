
import React, { lazy, Suspense, useMemo } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  ScrollRestoration
} from 'react-router-dom';

import type { BrowserRouterProps } from '../types/browserRouterTypes'
import useThemeColors from '../hook/useThemeColors';
import AuthGuard from './AuthGuard';





const BrowserRouter: React.FC<BrowserRouterProps> = ({
  routes = [],
  authStatus = false,
  loginPath = "/login",
  globalFallback = <div>Loading...</div>,
  style = {}
}) => {

  if (routes.length === 0) {
    throw new Error(
      ` Router Element is undefined; add like this 
      <BrowserRouter
       👉 routers=[{
          path : "/"
          element: <div>Home components</div> 
        }, {...}]
      />
      routers=[] // messing properties 
    `
    );
  };

  const {
    backgroundColor = "",
    height = "100dvh",
    overflow='scroll',
    scrollBehavior= "smooth" 
  } = style;

  const { mainBgColor, color } = useThemeColors();

  const divStypContener = {
    background: backgroundColor ? backgroundColor : mainBgColor,
    color: style.color ? style.color : color,
    height,
    overflow,
    scrollBehavior,
    ...style
  };


  const router = useMemo(() => {

    const routesData = routes?.map((route) => {
      const {
        path,
        importFunc,
        element,
        fallback,
        scrollType = "same-area",
        protectRouter = false,
        routerType = "link"
      } = route;


      if (!path) {
        throw new Error(
          `path not defined`
        )
      };


      // যদি importFunc থাকে তবে lazy load করবে, নতুবা সরাসরি element ব্যবহার করবে
      const ComponentToRender = importFunc ? lazy(importFunc) : null;

      const finalElement = (
        <div
          style={
            divStypContener
          }
        >
          <ScrollRestoration
            getKey={(location) =>
              scrollType === "reset" ? location.key : "app-global-scroll"
            }
          />
          <Suspense fallback={fallback || globalFallback}>
            {protectRouter ? (
              <AuthGuard
                isAllowed={authStatus}
                redirectTo={loginPath}
              >
                {
                  element || (ComponentToRender && <ComponentToRender />)
                }
              </AuthGuard>
            ) : (
              element || (ComponentToRender && <ComponentToRender />)
            )}
          </Suspense>
        </div>
      );
      return { path, element: finalElement };
    });
    return createBrowserRouter(routesData);

  }, [routes, authStatus, loginPath, globalFallback]);
  return <RouterProvider router={router} />;
};
export default BrowserRouter;