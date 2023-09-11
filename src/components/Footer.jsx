import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';


//  js0427. props 👉App.js
// const Footer = ({isDark, setIsDark}) => {

// js0454. useContext 👉app.js
const Footer = () => {

  // 👉2023-0911 👉ThemeContext.js
    const {isDark, setIsDark} = useContext(ThemeContext)

    /* 🦄 js0446, style{{~}}에 삼항연산자 사용 가능함
        클릭하면  setIsDark(!isDark);실행        
        클릭할때마다 isDark <--> !isDark 바뀜
    */
    const toggleTheme =()=>{
        setIsDark(!isDark);
    }

  return (
    <div
    style={{backgroundColor: isDark? 'black' : 'limegreen'}}>
    
    {/* js0446 */}
    <button onClick={toggleTheme}>Dark mode</button>
    </div>
  )
}

export default Footer