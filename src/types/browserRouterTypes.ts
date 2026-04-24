import {
  ReactNode, ComponentType, CSSProperties
} from 'react';





export interface RouteConfig {
  path?: string;
  // ইউজার এখানে () => import('./...') ফাংশনটি পাঠাবে
  importFunc?: () => Promise<{ default: ComponentType<any> }>;
  // অথবা সরাসরি কম্পোনেন্ট পাঠাতে পারবে
  element?: ReactNode;
  fallback?: ReactNode;
  scrollType?: "reset" | "same-area";
  protectRouter?: boolean;
  routerType?: 'link' | 'tab' | 'Tab' | 'Link',
  name?: string,
  icon?: ReactNode
  type?: 'link' | 'tab' | 'Tab' | 'Link',
};

export interface BrowserRouterProps {
  routes: RouteConfig[];
  authStatus?: boolean;
  loginPath?: string;
  globalFallback?: ReactNode;
  style?: CSSProperties,
  children?: ReactNode
}


export type RouterProtectProps = {
  children: ReactNode;
  redirectTo: string;
  isAllowed: boolean;
};

export interface RouterInfoConfig {
  key?: number;
  path?: string;
  type?: string;
  icon?: ReactNode;
  name?: string;
};
export type RouterContexTypes = {
  routerInfo?: RouterInfoConfig[],
  authStatus?: boolean,
  loginPath: string,
};

export type RouteItem = {
  key?: number;
  path?: string; // ❗ MUST string
  name?: string;
};
export type RouterLayoutProps= {
  children?: ReactNode;
};