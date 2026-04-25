import { useContext } from 'react';
import { Link, useLocation } from "react-router-dom";
import RouterContext from '../contexts/RouterContext';
import useThemeColors from '../hook/useThemeColors';
import type { BottomNavigonType, BtnProps } from '../types/bottomNavigonType'

const ButtonNavigiton = (props: BottomNavigonType) => {
  const {
    position = "fixed",
    place = "bottom",
    width = "100%",
    height = "60px",
    display = "flex",
    justifyContent = "space-around",
    textDecoration = "none",
    zIndex = "200",
    boxSizing= "border-box",
    style = {}
  } = props;

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
  const { pageBg, primary, color } = useThemeColors();

  var placementStyle = {};
  var btnStyle = {};

  if (place === "top") {
    placementStyle = {
      top: 0, left: 0, width, height,
      justifyContent: "space-betteen",
    };
  } else if (place === "bottom") {
    placementStyle = {
      left: 0, bottom: 0,
      width: "100%",
      height,
      justifyContent: 'space-around',
      alignItems: 'space-betteen',
      border: "solid 2px red"
    };
  } else if (place === "left") {
    placementStyle = {
      left: 0, top: 0,
      width: height,
      height: width,
      flexDirection: 'column',
      justifyContent: "flex-start",
      gap: "20px",
      paddingTop: "10px",

    };
  } else if (place === "right") {
    placementStyle = {
      left: 0, bottom: 0,
      width: height,
      height: width,
      flexDirection: 'column',
      justifyContent: "flex-start",
    };
  }

  const navSyle = {
    position,
    backgroundColor: pageBg,
    display,
    zIndex,
    boxSizing,
    ...placementStyle,
    ...style
  };



  return (
    <div style={navSyle}>
      {
        context?.routerInfo?.map((route, index) =>
          <RouterBtn
            key={index}
            route={route}
            textDecoration={textDecoration}
            primary={primary}
            color={color}
          />
        )
      }
    </div >
  );
};
export default ButtonNavigiton;

const RouterBtn = (props: BtnProps) => {
  const {
    route,
    textDecoration,
    primary,
    color,
  } = props;


  const path = useLocation()?.pathname;
  const textColor = route?.path === path ? primary : color;

  let type = route?.type;
  if (type === 'tab') {
    return (

      <Link
        style={{
          textDecoration,
          paddingLeft: 5,
          paddingRight: 5,
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
        }}
        to={route?.path!}
      >

        <div
          style={{
            fontSize: 25,
            justifyContent: 'center',
            alignItems: 'bottom',
            display: 'flex',
            color: textColor
          }}
        >
          {route?.icon}
        </div>

        <div
          style={{
            fontSize: 9,
            color: textColor
          }}
        >
          {
            route?.name
          }
        </div>

      </Link>

    )
  }
};