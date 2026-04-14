import useThemeColors from '../hook/useThemeColors';
import type { MainPropsType } from '../types/mainViewType';






const MainUiView = (props: MainPropsType) => {
  const {
    children,
    autoApply,
    style,
    overflow,
  } = props;

  const mainBgColor = useThemeColors();


  return (
    <div
    >
      {
        JSON.stringify(mainBgColor)
      }
      {children}
    </div>
  )
};
export default MainUiView;
