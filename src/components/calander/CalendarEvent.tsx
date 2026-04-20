import { useState, useMemo, useCallback } from "react";
import type { calenderPropsType } from '../../types/calenderType'
import {
  weekArray,
} from '../../constants/clender';
import { getFullCalendarGrid } from '../../core/calendar'
import useThemeColors from "../../hook/useThemeColors";

import CalendarHeader from './CalendarHeader';
import Calender from './Calender';
import EventHeader from './EventHeader';
import EventResult from './EventResult';






const CalendarEvent = (props: calenderPropsType) => {
  const {
    month = 4,
    year = 2026,
    navStyle = {},
    style = {},
    onChange = () => { },
    isLoad = false,
    setIsLoad = (val) => { },
    monthEventHas = [],
    children
  } = props;

  const { pageBg, mainBgColor } = useThemeColors();

  // ✅ Memoized style (prevents recreation)
  const divStyle = useMemo(() => ({
    width: "100%",
    ...style
  }), [style]);

  // ✅ Single source of truth
  const [date, setDate] = useState({ month, year });

  // ✅ Memoize calendar calculation (expensive function)
  const {
    calendarDays,
    currentDay,
    currentMonth,
    currentYear,
    currentDayName
  } = useMemo(() => getFullCalendarGrid({
    month: typeof date.month === "string" ? parseInt(date.month) : date.month,
    year: typeof date.year === "string" ? parseInt(date.year) : date.year,
    event: monthEventHas
  }), [date.month, date.year, monthEventHas]);




  // ✅ Initialize once, not on every render
  const [daySelect, setDaySelect] = useState(() => ({
    day: currentDay,
    month: currentMonth,
    year: currentYear
  }));

  // ✅ Stable function
  const handleLoad = useCallback((val: boolean) => {
    setIsLoad(val);
  }, [setIsLoad]);

  // ✅ Correct month navigation with year handling
  const prevMonthHendel = useCallback(() => {
    if (isLoad) return;
    handleLoad(true);
    setDate(prev => {

      const numMunth = typeof prev.month === "string" ? parseInt(prev.month) : prev.month;
      const newMonth = numMunth - 1;
      const numYear = typeof prev.year === "string" ? parseInt(prev.year) : prev.year;
      return {
        month: newMonth < 1 ? 12 : newMonth,
        year: newMonth < 1 ? numYear - 1 : numYear
      };
    });
  }, [isLoad, handleLoad]);

  const nextMonthHendel = useCallback(() => {
    if (isLoad) return;
    handleLoad(true);
    setDate(prev => {
      const numMunth = typeof prev.month === "string" ? parseInt(prev.month) : prev.month;
      const newMonth = numMunth + 1;

      const numYear = typeof prev.year === "string" ? parseInt(prev.year) : prev.year;

      return {
        month: newMonth > 12 ? 1 : newMonth,
        year: newMonth > 12 ? numYear + 1 : numYear
      };
    });
  }, [isLoad, handleLoad]);

  return (
    <div style={divStyle}>
      <CalendarHeader
        currentDay={currentDay}
        currentMonth={currentMonth}
        currentYear={currentYear}
        currentDayName={currentDayName}
        pageBg={pageBg}
        navStyle={navStyle}
        prevMonthHendel={prevMonthHendel}
        nextMonthHendel={nextMonthHendel}
      />

      <Calender
        pageBg={pageBg}
        mainBgColor={mainBgColor}
        currentDay={currentDay}
        calendarDays={calendarDays}
        daySelect={daySelect}
        setDaySelect={setDaySelect}
        onChange={onChange}
        load={isLoad}
        hendelLoad={handleLoad}
        
      />

      <EventHeader
        day={daySelect.day}
        month={daySelect.month}
        year={daySelect.year}
        pageBg={pageBg}
        mainBgColor={mainBgColor}
      />

      {children}
    </div>
  );
};
export default CalendarEvent;


