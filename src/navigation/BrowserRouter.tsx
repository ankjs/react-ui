
import React, { lazy, Suspense, useMemo } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  ScrollRestoration
} from 'react-router-dom';

import type { BrowserRouterProps, RouteItem } from '../types/browserRouterTypes'
import RouterContext from '../contexts/RouterContext'
import useThemeColors from '../hook/useThemeColors';
import AuthGuard from './parts/AuthGuard';
import RootLayout from './parts/RootLayout';






const BrowserRouter: React.FC<BrowserRouterProps> = ({
  routes = [],
  authStatus = false,
  loginPath = "/login",
  globalFallback = <div>Loading...</div>,
  style = {},
  children
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
    overflow = 'scroll',
    scrollBehavior = "smooth"
  } = style;

  const { mainBgColor, color, pageBg } = useThemeColors();

  const divStypContener = {
    background: backgroundColor ? backgroundColor : mainBgColor,
    color: style.color ? style.color : color,
    height,
    overflow,
    scrollBehavior,
    ...style
  };




  const routerInfo = useMemo(() => {
    const routesData: RouteItem[] = routes?.map((r, i) => {
      return {
        key: i,
        path: r.path,
        type: r.type || r.routerType,
        icon: r.icon
      }
    })
    return routesData
  }, [routes]);



  const router = useMemo(() => {
    const routesData = routes?.map((route, index) => {
      const {
        path,
        importFunc,
        element,
        fallback,
        scrollType = "same-area",
        protectRouter = false,
      } = route;


      if (!path) {
        throw new Error(
          `path not defined`
        )
      };

      // যদি importFunc থাকে তবে lazy load করবে, নতুবা সরাসরি element ব্যবহার করবে
      const ComponentToRender = importFunc ? lazy(importFunc) : null;

      const finalElement = (
        <>
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
        </>
      );
      return { path, element: finalElement };
    });
    return createBrowserRouter([
      {
        path: "/",
        element: <RootLayout>{children}</RootLayout>,
        children: routesData
      }
    ]);
  }, [
    routes,
    authStatus,
    loginPath,
    globalFallback,
    children,
  ]);





  return (
    <RouterContext.Provider
      value={{
        routerInfo,
        authStatus,
        loginPath
      }}
    >
      <div
        key={index}
        style={
          divStypContener
        }
      >
        <RouterProvider router={router} />
      </div>
    </RouterContext.Provider>
  )
};
export default BrowserRouter;