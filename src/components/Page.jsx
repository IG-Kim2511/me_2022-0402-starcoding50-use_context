import React from 'react'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'


// js0427 👉App.js
const Page = ({isDark,setIsDark}) => {
  return (
    <div>
        
    {/* js0427 props */}
        <Header isDark={isDark} setIsDark={setIsDark}/>
        <Content isDark={isDark} setIsDark={setIsDark}/>
        <Footer isDark={isDark} setIsDark={setIsDark}/>
    </div>
  )
}

export default Page