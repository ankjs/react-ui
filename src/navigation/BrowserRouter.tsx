
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

  const { pageBg } = useThemeColors();

  const divStypContener = {
    background: backgroundColor ? backgroundColor : pageBg,
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





/***** use 
 * 
 * 
 * 
 
import { BrowserRouter } from 'your-npm-package';

const routes = [
  {
    path: "/",
    // ইউজার নিজের প্রজেক্ট থেকে ইমপোর্ট ফাংশন দিচ্ছে
    importFunc: () => import("./pages/Home"), 
    protectRouter: false
  },
  {
    path: "/dashboard",
    // অথবা সরাসরি কম্পোনেন্ট দিচ্ছে
    element: <Dashboard />, 
    protectRouter: true,
    scrollType: "reset"
  }
];

// App.tsx
<BrowserRouter routes={routes} authStatus={isLoggedIn} /> />

  * 
 */





/**
const AuthGuard = (props: RouterProtectProps) => {
  const {
    children = {},
    isAllowed = false,
    redirectTo = "/login"
  } = props;

  const location = useLocation();

  if (!isAllowed) {
    // Redirect to login, but keep the current location in state 
    // so we can redirect back after login.
    return <Navigate to={redirectTo} state={{ from: location }} replace />;
  }
  return children && children
};
  The Enhanced BrowserRouter


const BrowserRouter = (props: BrowserRouterProps) => {
  const {
    routes = [],
    authStatus = false
  } = props;


  const router = useMemo(() => {
    const routesData = routes.map((route) => {
      const {
        path,
        dir = "pages",  // Folder name
        fileName,    // File name
        fallback = <div className="loader">Loading...</div>,
        scrollType = "same-area",
        protectRouter = false,
        component = {}
      } = route;


      // Dynamic Lazy Import
      const LazyComponent = lazy(() => import(`../${dir}/${fileName}.jsx`));


      const element = (
        <>
          <ScrollRestoration
            getKey={(location) => {
              // 'reset' forces a new scroll top, 'same-area' preserves it
              return scrollType === "reset" ? location.key : "app-global-scroll";
            }}
          />
          <Suspense fallback={fallback}>
            {protectRouter ? (
              <div>
                <AuthGuard isAllowed={authStatus}>
                  {component}
                </AuthGuard>
              </div>
            ) : (
              <div>
                {component && component}
              </div>
            )}
          </Suspense>
        </>
      );

      return { path, element };
    });

    return createBrowserRouter(routesData);
  }, [routes, authStatus]);

  return <RouterProvider router={router} />;
};

export default BrowserRouter;

 */




/*

const routes = [
  {
    path: "/home",
    component: <div>home</div>
    scrollType: "reset" 
  }
];

// Inside your BrowserRouter component:


// 1. Tell Vite to "pre-index" your entire pages folder
const pages = import.meta.glob('../pages/*.jsx');

// 2. Inside your BrowserRouter mapping:
const BrowserRouter = ({ routes = [] }) => {
  const routesData = routes.map((route) => {
    // route.importPath would be "../pages/Home.jsx"
    const LazyComponent = lazy(pages[route.importPath]); 

    return {
      path: route.path,
      element: (
        <Suspense fallback={route.fallback}>
          <LazyComponent />
        </Suspense>
      )
    };
  });
  
  // ... rest of the code
};
*/