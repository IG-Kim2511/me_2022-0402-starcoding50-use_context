import React from 'react'


//  js0427 👉App.js 
const Footer = ({isDark, setIsDark}) => {

    /* 🦄 js0446
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