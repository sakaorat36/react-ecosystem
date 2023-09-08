import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigate, useNavigate, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./index.css";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

function HomePage() {
  const [friend, setFriend] = useState([]);
  const navigate = useNavigate();

  const fetchFriend = async () => {
    try {
      const response = await axios.get("/users");
      console.log(response.data);
      setFriend(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleNavigate = (userId) => {
    console.log(userId);
    if (userId == 1) navigate("/profile");
    else navigate(`/profile/${userId}`);
  };

  useEffect(() => {
    fetchFriend();
  }, []);

  return (
    <div className="App">
      <h1>Home Page</h1>
      {friend.map((f) => (
        <div className="friend" key={f.id} onClick={() => handleNavigate(f.id)}>
          <h3>{f.name}</h3>
          <h5>
            {f.email},Tel.{f.phone}
          </h5>
        </div>
      ))}
    </div>
  );
}
function ProfilePage() {
  return <div className="App">Profile Page</div>;
}
function FriendPage() {
  const { userId } = useParams();
  console.log(userId);
  const [friend, setFriend] = useState(null);

  const fetchFriendDetail = async () => {
    try {
      const { data } = await axios.get(`/users/${userId}`);
      console.log(data);
      setFriend(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchFriendDetail();
  }, []);
  return (
    <div className="App">
      {friend && (
        <div className="friend">
          <h3>{friend.name}</h3>
        </div>
      )}
    </div>
  );
}
function FeedPage() {
  return <div className="App">Feed Page</div>;
}

function NotFoundPage() {
  return <div className="App">404 : Not Found</div>;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Link to="/">home</Link>
    <Link to="/profile">profile</Link>
    <Link to="/profile/5">friend</Link>
    <Link to="/feed">feed</Link>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/profile/:userId" element={<FriendPage />} />
      <Route path="/feed" element={<FeedPage />} />
      {/* <Route path="*" element={<NotFoundPage />} /> */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </BrowserRouter>
);
// npm i react-router-dom
// npm i axios
