import React, { useEffect, createContext, useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import axios from "axios";
// สร้าง AuthContext สำหรับ Provide isAuth, handleAuth ให้ <App/>

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({ name: "Guest" });

  // isAuth : false => true ให้ delay 1 วิ
  // useEffect(() => {
  //   setTimeout(() => {
  //     setTimeout(() => {
  //       setIsLoading(false);
  //     }, 3000);
  //   });
  // }, [isLoading]);

  // const handleAuth = () => {
  //   // login : isAuth : false => true
  //   if (!isAuth) {
  //     setIsLoading(true);
  //     setTimeout(() => {
  //       setIsAuth(true);
  //       setIsLoading(false);
  //     }, 3000);
  //   } else {
  //     setIsAuth(false);
  //   }
  // };
  const handleAuth = async () => {
    // Login => Logout
    if (isAuth) {
      setIsAuth(false);
      return;
    }

    try {
      setIsLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      console.log(response.data);
      setUser(response.data);
      setIsAuth(true);
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };
  // const shareObj = {isAuth, handleAuth}
  return (
    <AuthContext.Provider value={{ isAuth, handleAuth, isLoading, user }}>
      {children}
    </AuthContext.Provider>
  );
}

// UI
function App() {
  const { isAuth, handleAuth, isLoading, user } = useContext(AuthContext);

  return (
    <div className="App">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <h1>Welcome..{!isAuth ? "Guest" : user?.name}</h1>
      )}
      <button onClick={handleAuth} disabled={isLoading}>
        {!isAuth ? "Login" : "Logout"}
      </button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
);
