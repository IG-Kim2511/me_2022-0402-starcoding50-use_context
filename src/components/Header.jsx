import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { UserContext } from '../context/UserContext'

//  js0427. props 👉App.js
// const Header = ({isDark}) => {\

// js0454. useContext 👉app.js
const Header = () => {

    // js0454
    const {isDark} = useContext(ThemeContext)
    
    // js0524
    const user = useContext(UserContext)
    
  return (
    /* js0427 👉App.js
    
        🦄css에 ternary operator 넣기
        isDark가 
        true이면? black
        false이면? lightgray    
    */
    <div    
        style={{
            backgroundColor:isDark? 'black' : 'lightgreen',
            color: isDark? 'white' :'black',
        }}
    >
        <h1>Welcome man!</h1>


        <h1>Welcome {user}!</h1>
    </div>
  )
}

export default Header