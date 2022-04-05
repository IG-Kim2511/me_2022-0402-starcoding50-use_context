import { useState } from "react";
import Page from "./components/Page";
import { ThemeContext } from "./context/ThemeContext";


function App() {

  // 🍀🦄 js0427. darkmode 준비
  // 👉Page, Header, Content, Footer
  const [isDark, setIsDark] = useState(false)
  
  return (
    <div>
    <h1>별코딩 useContext</h1>


    {/* js0427  props
      <Page isDark={isDark} setIsDark={setIsDark}/>
    */}


    {/* 🍀 js0454 useContext 👉ThemeContext, Page, Header, Content, Footer*/}
    <ThemeContext.Provider value={{isDark, setIsDark}}>
      <Page/>
    </ThemeContext.Provider>




    </div>
  );
}

export default App;
