import './parts/hidescrollsidebar.css';

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
      ` 
       * routes not defined
      Router Element is undefined; add like this 
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
    width = "100%",
    height = "100dvh",
    overflow = 'scroll',
    scrollBehavior = "smooth",
    boxSizing = "border-box"
  } = style;

  const { mainBgColor, color, pageBg } = useThemeColors();

  // 🔹 UI container style (FIXED)
  const divStypContener = useMemo(() => {
    const obj = {
      background: backgroundColor ? backgroundColor : mainBgColor,
      color: style.color ? style.color : color,
      minHeight: height,
      width,
      scrollBehavior,
      border: "solid 3px pink",
      boxSizing,
      overflow,
      ...style
    }
    return obj
  }, [backgroundColor, mainBgColor, height, style, color, scrollBehavior]);




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



  const routesData = useMemo(() => {
    return routes?.map((route, index) => {
      const {
        path,
        importFunc,
        element,
        fallback,
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
        <Suspense fallback={fallback || globalFallback}>
          {
            protectRouter ? (
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
            )

          }
        </Suspense>
      );
      return { path, element: finalElement };
    });
  }, [routes, authStatus, loginPath, globalFallback]);


  // 🔹 router create
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <RootLayout>
          {children} {/* Navbar */}
        </RootLayout>
      ),
      children: routesData
    }
  ]);




  return (
    <RouterContext.Provider
      value={{ routerInfo, authStatus, loginPath }}
    >
      <div style={divStypContener} className="ankjs-main-page-view">
        <RouterProvider router={router} />
      </div>
    </RouterContext.Provider >
  )
};
export default BrowserRouter;