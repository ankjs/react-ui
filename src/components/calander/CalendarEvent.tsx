import React, { useState, useEffect } from 'react';
import type { calenderPropsType } from '../../types/calenderType'
import {
  weekArray,
} from '../../constants/clender';
//import { getFullCalendarGrid } from '../../core/calendar'
import useThemeColors from "../../hook/useThemeColors";

//import CalendarHeader from './CalendarHeader';
//import Calender from './Calender';
//import EventHeader from './EventHeader';
//import EventResult from './EventResult';






const CalendarEvent = (props: calenderPropsType) => {

  const {
    month = 4,
    year = 2026,
    navStyle = {},
    style = {},
    onChange = (value) => { },
    isLoad = false,
    setIsLoad = () => { },
    monthEventHas = [],
    children
  } = props;


  const divStyle = {};


  return (
    <div style={divStyle}>
    </div>
  )
};
export default CalendarEvent;


