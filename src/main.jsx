import React, { createContext, useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// Context
// #####A1.createContext [Provider, Consumer]
const ThemeContext = createContext();
/*
#####A2.สร้าง HOC : Higher Order Component
HOC คือ FC ที่รับ Component เข้าไปและ return Component ใหม่ออกมา
function ThemeContextProvider(props) {
  console.log(props);
  return <div>{props.children}</div>;
}
*/

// Data : isDarkMode, styleObj
// Logic : setIsDarkMode, handdleToggleTheme
function ThemeContextProvider(props) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const styleObj = {
    backgroundColor: isDarkMode ? "black" : "white",
    color: isDarkMode ? "white" : "black",
  };

  const handdleToggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const shareObj = { theme: styleObj, toggleTheme: handdleToggleTheme };
  return (
    <ThemeContext.Provider value={shareObj}>
      {props.children}
    </ThemeContext.Provider>
  );
}

/*
#####A2 Share Data and Logic ผ่าน attribute value
- Data (State, boolean, string, object, array, etc)
- Logic (FN ที่ใช้ handdle ต่างๆ)
*/

// #####A3. นำ Provider ไปคลอบ Children [Provider]
// <ThemeContextProvider>
//   <App />
// </ThemeContextProvider>

/*
#####B1 : @Children Component ดึงค่า Shared object ผ่านตัว  useContext
SYNTAX : useContext(ContextName)
ex.
const shareObj = useContext(ThemeContext)
*/

// ###################################################
// ###################################################
// ###################################################
// ###################################################

// UI
function App() {
  const s = useContext(ThemeContext);
  console.log(s); // 42 เพราะว่า <App/> เป็น childrenของ <ThemeContextProvider> จึงสามารถดึงข้อมูลของ <ThemeContextProvider> มาได้
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div className="App" style={s.theme}>
      <h1>Theme App</h1>
      <button onClick={s.toggleTheme}>Toggle Theme</button>
    </div>
  );
}

// 3. นำ Provider ไปคลอบ Children [Provider]
ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>
);
