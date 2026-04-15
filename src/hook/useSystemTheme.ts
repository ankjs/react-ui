import { useEffect, useState } from "react";





const useSystemTheme = () => {

  const theme = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? "dark"
    : "light"

  const [sysTheme, setSysTheme] = useState<'light' | 'dark'>(
    theme
  );

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      setSysTheme(media.matches ? "dark" : "light");
    };
    handleChange();
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, [theme, setSysTheme]);

  return sysTheme;
};
export default useSystemTheme;







