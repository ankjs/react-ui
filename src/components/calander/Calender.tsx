
import {
  weekArray,
} from '../../constants/clender';
import {
  TODAY
} from '../../core/calendar'
import type { CalenderPropsType } from '../../types/calenderType'



const Calender = (props: CalenderPropsType) => {

  const {
    pageBg,
    mainBgColor,
    currentDay,
    onChange = (val) => { },
    calendarDays = [],
    daySelect={},
    setDaySelect = (obj) => { },
    load,
    hendelLoad = (val) => { },
  } = props;



  const onClickHendel = (dateObj: any) => {
    if (load || dateObj.type !== "current") return;
    hendelLoad(true)
    setDaySelect({
      day: dateObj.day,
      month: dateObj.month,
      year: dateObj.year
    });
    return onChange(TODAY(dateObj.day, dateObj.month, dateObj.year));
  };



  return (
    <div
      style={{
        padding: "3px",
      }}
    >
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(7, 1fr)',
        textAlign: 'center',
        fontSize: '17px',
        marginTop: '10px',
        marginBottom: '5px',
        backgroundColor: pageBg,
        fontWeight: 'bold',
        borderRadius: 10,
        height: "30px",
        alignItems: 'center',
        color: mainBgColor
      }}>
        {
          weekArray.map((day: any) => (
            <div key={day} className="day-name">{day}</div>
          ))}
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          gap: '2px',
          textAlign: 'center',
          backgroundColor: 'transparent'
        }}
      >
        {
          calendarDays.map((dateObj: any, index: number) => {

            let cursor = (!load && dateObj.type === "current") ? "pointer" : "none";
            let fontWeight = dateObj.type === "current" ? "bold" : "normal";
            let fontSize = dateObj.type === "current" ? "19px" : "normal";
            let colors = ((index % 7 === 0) && dateObj.type === 'current' && !dateObj.isToday) ? "red" : "#333";

            let color = dateObj.type === "current" ? colors : "#808080";
            // let color = dateObj.type === "current" ? "#222" : "#baacac";
            let bg = (dateObj.type === "current" && dateObj?.day === daySelect?.day) ? "#3b72f6" : "transparent";
            let borderWidth = (dateObj?.day === currentDay) ? 1 : 0;


            return (
              <div
                key={index}
                style={{
                  height: "60px",
                  justifyContent: 'center',
                  alignItems: 'center',
                  display: 'flex',
                  cursor: cursor,
                  fontWeight: fontWeight,
                  color: color,
                  backgroundColor: bg,
                  borderRadius: 5,
                  fontSize: fontSize,
                  borderColor: "red",
                  borderStyle: "solid",
                  borderWidth: borderWidth,
                  flexDirection: 'column',
                }}
                onClick={() => onClickHendel(dateObj)}

              >
                <span>
                  {dateObj.day}
                </span>
                {
                  (dateObj.hasEvent && dateObj.type === 'current') &&
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 'bold',
                      height: '3px',
                      width: '16px',
                      backgroundColor: pageBg,
                      borderRadius: 5,
                    }}
                  >
                  </span>
                }
              </div>
            );
          })}
      </div>
    </div>

  );
};
export default Calender;