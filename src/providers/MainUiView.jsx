
import useThemeColors from '../hook/useThemeColors'




export default function MainUiView(props) {
  const {
    children,
    autoColorApply,
    colorObject,
    style,
    others,
  } = props;

  const colors = useThemeColors();


  const styleContener = {
    ...style
  };

  return (
    <div
      style={styleContener}
    >
      {
        JSON.stringify(colors)
      }
      {children}
    </div>
  )
};
