import { useContext } from 'react';
import RouterContext from '../contexts/RouterContext';
import { Link } from 'react-router-dom'


const ButtonNavigiton = () => {

  const context = useContext(RouterContext);

  const routerInfo = context?.routerInfo
  if (!context || !routerInfo) {
    throw new Error(` * TabSwitchView must be used within a BrowserRouter * \n like this - \n import  BrowserRouter  from '@ankjs/react-ui;
    
      <BrowserRouter
        routes={routes}
        authStatus={false}
      >
        <TabSwitchView />
      </BrowserRouter>
    `)
  };


  return (
    <div style={{
      position: "fixed",
      bottom: 0,
      left: 0,
      width: "100%",
      display: "flex",
      justifyContent: "space-around"
    }}>
      {
        context?.routerInfo?.map((route, index) => (
          <Link
            key={index}
            to={route?.path!}
          >
            {route?.name}
          </Link>
        ))}
    </div>
  );
};
export default ButtonNavigiton;