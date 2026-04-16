import {
  ReactNode, ComponentType, CSSProperties
} from 'react';





export interface RouteConfig {
  path: string;
  // ইউজার এখানে () => import('./...') ফাংশনটি পাঠাবে
  importFunc?: () => Promise<{ default: ComponentType<any> }>;
  // অথবা সরাসরি কম্পোনেন্ট পাঠাতে পারবে
  element?: ReactNode;
  fallback?: ReactNode;
  scrollType?: "reset" | "same-area";
  protectRouter?: boolean;
  routerType : 'page'|'tab'
};

export interface BrowserRouterProps {
  routes: RouteConfig[];
  authStatus: boolean;
  loginPath?: string;
  globalFallback?: ReactNode;
  style?: CSSProperties
}


export type RouterProtectProps = {
  children: ReactNode;
  redirectTo: string;
  isAllowed: boolean;
};










/*

const AuthGuard: React.FC<{ 
  isAllowed: boolean; 
  redirectTo: string; 
  children: React.ReactNode 
}> = ({ isAllowed, redirectTo, children }) => {
  const location = useLocation();
  if (!isAllowed) {
    return <Navigate to={redirectTo} state={{ from: location }} replace />;
  }
  return <>{children}</>;
};

const BrowserRouter: React.FC<BrowserRouterProps> = ({ 
  routes, 
  authStatus, 
  loginPath = "/login",
  globalFallback = <div>Loading...</div>
}) => {

  const router = useMemo(() => {
    const routesData = routes.map((route) => {
      const {
        path,
        importFunc,
        element,
        fallback,
        scrollType = "same-area",
        protectRouter = false
      } = route;

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
              <AuthGuard isAllowed={authStatus} redirectTo={loginPath}>
                {element || (ComponentToRender && <ComponentToRender />)}
              </AuthGuard>
            ) : (
              element || (ComponentToRender && <ComponentToRender />)
            )}
          </Suspense>
        </>
      );

      return { path, element: finalElement };
    });

    return createBrowserRouter(routesData);
  }, [routes, authStatus, loginPath, globalFallback]);

  return <RouterProvider router={router} />;
};

export default BrowserRouter;
*/

/*



*/