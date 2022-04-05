import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

import Footer from './Footer'
import Header from './Header'


// js0427 👉App.js
const Page = ({isDark,setIsDark}) => {


    // js0454 👉app.js
    const theme = useContext(ThemeContext)
    console.log(theme)

  return (
    <div>
        
    {/* js0427 props 
        <Header isDark={isDark} setIsDark={setIsDark}/>
       
        <Footer isDark={isDark} setIsDark={setIsDark}/>
    */}


    {/* js0454 */}
    <Header/>
  
    <Footer/>
       
    </div>
  )
}

export default Page