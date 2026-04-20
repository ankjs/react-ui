import useThemeColors  from "../../hook/useThemeColors";
import type { EventResultProps } from '../../types/calenderType'




const EventResult = (props: EventResultProps) => {
  const {
    data = []
  } = props;

  const dataLength = data.length || 0

  const { pageBg, mainBgColor, color } = useThemeColors();


  return (
    <div style={{
    }}>
      <div
        style={{
          fontWeight: 'bold',
          padding: 5,
          color: pageBg
        }}
      >
        Event fount :{dataLength}
      </div>
      {
        dataLength === 0 ? (
          <div
            style={{
              fontWeight: 'bold',
              padding: 5,
              color: pageBg,
              fontSize: 22,
            }}
          >
            NO EVENT FOUND
          </div>
        ) :
          (
            <div>
              {
                data.map((item: any, index: number) =>
                  <div
                    style={{
                      fontWeight: 'bold',
                      padding: 5,
                      color: color,
                      fontSize: 18,
                    }}
                  >
                    <div>
                      {item.title}
                    </div>
                    <div>
                      {item.location}
                    </div>
                    <img
                      src={item.image}
                      alt=""
                      style={{
                        width: "100%",
                        height: "200px",
                      }}
                    />

                    <div>
                      {item.time}
                    </div>
                  </div>
                )
              }
              <div
                style={{
                  height: '70px',
                }}
              >
              </div>
            </div>
          )
      }
    </div>
  )
}
export default EventResult;