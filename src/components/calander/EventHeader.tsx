import {
  manthArray
} from '../../constants/clender';
import { MdDateRange } from "react-icons/md";
import type {EventHederProps} from '../../types/calenderType'






const EventHeader = (props:EventHederProps) => {

  const { day, month, year, pageBg, mainBgColor } = props;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        fontWeight: 'bold',
        gap: "10px",
        backgroundColor: pageBg,
        color: mainBgColor,
        width: '50%',
        borderRadius: 5,
        margin: 5,
        alignItems: 'center',
        fontSize: 18,
        height: 40,
        paddingLeft: 5,
      }}
    >
      <MdDateRange size={25} />
      <span>
        {day}
      </span>
      <span>
        {
          manthArray?.map((item, i) =>
            <span key={i}>
              {
                ((i + 1) === month) && item
              }
            </span>,
          )
        }
      </span>
      <span>
        {year}
      </span>
    </div>
  );
};
export default EventHeader;