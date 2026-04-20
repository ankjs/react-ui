



const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];


export const TODAY = (d: number, m: number, y: number) => {
  let today = new Date();
  let currentDay = d ? d : today.getDate();
  let currentMonth = m ? m : today.getMonth() + 1;
  let currentYear = y ? y : today.getFullYear();

  let day = currentDay <= 9 ? `0${currentDay}` : currentDay;
  let month = currentMonth <= 9 ? `0${currentMonth}` : currentMonth;
  return `${day}-${month}-${currentYear}`;
};




type PropsType = {
  month?: number;
  year?: number;
  event?: number[];
};

export const getFullCalendarGrid = (props: PropsType) => {
  const { month, year, event = [] } = props;

  const today = new Date();

  const currentMonth = month ?? today.getMonth() + 1;
  const currentYear = year ?? today.getFullYear();

  const firstDayDate = new Date(currentYear, currentMonth - 1, 1);
  const lastDayDate = new Date(currentYear, currentMonth, 0);
  const prevMonthDate = new Date(currentYear, currentMonth - 1, 0);

  const totalDays = lastDayDate.getDate();
  const startDayIndex = firstDayDate.getDay();

  const allDaysArray = [];

  // 🔹 Previous Month Days
  const prevMonthTotalDays = prevMonthDate.getDate();
  for (let i = startDayIndex - 1; i >= 0; i--) {
    allDaysArray.push({
      day: prevMonthTotalDays - i,
      type: 'previous',
      hasEvent: false,
    });
  }

  // 🔹 Current Month Days
  for (let d = 1; d <= totalDays; d++) {
    const isToday =
      d === today.getDate() &&
      currentMonth === today.getMonth() + 1 &&
      currentYear === today.getFullYear();

    allDaysArray.push({
      day: d,
      type: 'current',
      isToday,
      hasEvent: event.includes(d), // ✅ এখন আর error হবে না
      month: currentMonth,
      year: currentYear,
    });
  }

  // 🔹 Next Month Days
  const remainingSlots = 42 - allDaysArray.length;
  for (let n = 1; n <= remainingSlots; n++) {
    allDaysArray.push({
      day: n,
      type: 'next',
      hasEvent: false,
    });
  }

  return {
    currentYear,
    currentMonth,
    currentDay: today.getDate(),
    calendarDays: allDaysArray,
    currentDayName: dayNames[today.getDay()],
  };
};