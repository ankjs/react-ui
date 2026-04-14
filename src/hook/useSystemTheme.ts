import { useEffect, useState } from "react";



type Theme = "light" | "dark";
const useSystemTheme = () => {


  const [sysTheme, setSysTheme] = useState<'light' | 'dark'>(
    window.matchMedia('(prefers-color-scheme: dark)').matches
      ? "dark"
      : "light"
  );


  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      setSysTheme(media.matches ? "dark" : "light");
    };
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  return sysTheme;
};
export default useSystemTheme;







