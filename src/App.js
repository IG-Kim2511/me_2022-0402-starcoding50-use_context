
import { useState } from "react";
import Page from "./components/Page";

import { ThemeContext } from "./context/ThemeContext";

import { UserContext } from "./context/UserContext";

function App() {

  // 👉2023-0911 👉ThemeContext.js
  const [isDark, setIsDark] = useState(false)


  

  return (
    <div>
    <h1>별코딩 useContext (dark mode)</h1>


    {/* js0427  props
      <Page isDark={isDark} setIsDark={setIsDark}/>
    */}


    {/* 🍀 js0454 useContext - ThemeContext 👉ThemeContext, Page, Header, Content, Footer*/}
    {/* 🍀 js0524 useContext - UserContext 여러번 겹쳐서 사용하기. "text"보내기 */}

    <UserContext.Provider value={'사용자'}>

    {/* 👉2023-0911 👉ThemeContext.js */}
      <ThemeContext.Provider value={{isDark, setIsDark}}>

       <Page/>

      </ThemeContext.Provider>

    </UserContext.Provider>




    </div>
  );
}

export default App;
