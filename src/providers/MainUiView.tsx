import './main-ui-view.css'
import useThemeColors from '../hook/useThemeColors';
import type { MainPropsType } from '../types/mainViewType';






const MainUiView = (props: MainPropsType) => {
  const {
    children,
    autoApply,
    style,
    overflow,
    backgroundColor,
    fontolor
  } = props;

  const colors = useThemeColors();
  const {
    mainBgColor, color
  } = useThemeColors();

  const bg = autoApply ? mainBgColor : backgroundColor
  const text = autoApply ? color : fontolor;

  const styleContener = {
    backgroundColor: bg,
    color: text,
    height: "100dvh",
    width: "100%",
    overflow,
    ...style
  }


  return (
    <div
      className="ankjs-main-page-view"
      style={styleContener}
    >
      {children}
    </div>
  )
};
export default MainUiView;
