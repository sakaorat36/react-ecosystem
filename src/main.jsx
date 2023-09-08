import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const styleObj = {
    backgroundColor: isDarkMode ? "black" : "white",
    color: isDarkMode ? "white" : "black",
  };
  const handdleToggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className="App" style={styleObj}>
      <h1>Theme App</h1>
      <button onClick={handdleToggleTheme}>Toggle Theme</button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
