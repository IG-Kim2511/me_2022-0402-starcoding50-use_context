import React from 'react'

//  js0427 👉App.js 
const Content = ({isDark}) => {
  return (
    <div
        style={{backgroundColor:isDark? 'black':'lightgreen',
        color: isDark? 'white': 'black'}}
    >
        <h3>man, have a good day</h3>
    </div>
  )
}

export default Content