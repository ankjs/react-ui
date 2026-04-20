
import React, {
  ReactNode,
  ChangeEvent,
  CSSProperties
} from 'react';


export interface MonthEventHas {
 day: number; type: string; hasEvent: boolean; isToday?: undefined; month?: undefined; year?: undefined; 
}


export type calenderPropsType = {
  month?: string | number;
  year?: string | number;
  navStyle?: CSSProperties;
  style?: CSSProperties;
  onChange?: (value: string) => void;
  isLoad?: boolean;
  setIsLoad?: (val: boolean) => void,
  monthEventHas?: MonthEventHas[],
  children?: ReactNode
};

export type ClenderHeaderType = {

  currentDay: number | string;
  currentMonth: number | string;
  currentYear: number | string;
  currentDayName?: number | string;
  pageBg?: CSSProperties;
  navStyle?: CSSProperties;
  prevMonthHendel?: () => void;
  nextMonthHendel?: () => void

};




export interface ArrayConfig {
  day?: number | string;
  type?: string;
  hasEvent?: boolean;
  isToday?: boolean;
  month?: number | string;
  year?: number | string;
};


export type CalenderPropsType = {
  pageBg?: string;
  mainBgColor?: string;
  currentDay?: string | number;
  onChange?: (value: string) => void,
  calendarDays?: ArrayConfig[];
  daySelect?: any;
  setDaySelect?: (object: any) => void;
  load?: boolean;
  hendelLoad?: (val: boolean) => void
};


export type EventHederProps = {
  day?: string | number;
  month?: string | number;
  year?: string | number,
  pageBg?: string;
  mainBgColor?: string
};



export type EventResultProps = {
  data?: ArrayConfig[]
};