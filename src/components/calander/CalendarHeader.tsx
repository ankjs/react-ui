import {
  manthArray,
} from '../../constants/clender';
import type {
  ClenderHeaderType
} from '../../types/calenderType'
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";




const CalendarHeader = (props: ClenderHeaderType) => {
  const {
    currentDay,
    currentMonth,
    currentYear,
    currentDayName,
    pageBg,
    navStyle = {},
    prevMonthHendel = () => { },
    nextMonthHendel = () => { }
  } = props;

  const navStyles = {
    ...navStyle,
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'column',

    gap: "4px",
    padding: 5,
    justifyContent: 'center',
    marginBottom: 5
  } as const;

  return (
    <header
      style={navStyles}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            fontSize: 25,
            justifyContent: 'left',
            fontWeight: 'bold',
          }}
        >
          <span>
            {
              manthArray?.map((item: any, i: number) =>
                <span key={i}>
                  {
                    ((i + 1) === currentMonth) && item
                  }
                </span>,
              )
            }
          </span>
          <span>
            {` ${currentDay},`}
          </span>
          <span>
            {currentYear}
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            gap: "15px",
          }}
        >
          <FaAngleLeft size="27" onClick={prevMonthHendel} />
          <MdDateRange size="27" />
          <FaAngleRight size="27" onClick={nextMonthHendel} />
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          fontWeight: 'bold',
          fontSize: 25,
        }}
      >
        {currentDayName}
      </div>
    </header>
  );
};
export default CalendarHeader;