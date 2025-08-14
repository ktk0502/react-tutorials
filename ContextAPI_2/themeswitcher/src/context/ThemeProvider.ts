import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode : 'light',
  darkTheme : ()=>{},
  lightTheme : ()=>{}
});

export const ThemeProvider = ThemeContext.Provider;

//we made a custom useTheme hook which help us avoiding two imports useContext nd ThemeContext now just inporting the hhok would work
export default function useTheme (){
  return useContext(ThemeContext);
}