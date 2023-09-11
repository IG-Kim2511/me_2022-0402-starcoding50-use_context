
// js0454 


/* 🦄2023-0911
    0.ㄱ context만듬

    1. <ㄱcontext.Provder value={{ㄴ,ㄷ}}> 있는곳에 변수 넣음
    👉App.js

    2. 사용하는곳에서 
    const {ㄴ,ㄷ} = useContext(ㄱcontext) 넣고 변수 사용
    👉Footer.js
*/
import { createContext } from "react";  

export const ThemeContext = createContext(null);

