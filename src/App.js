import React , { useState } from "react";
import { BrowserRouter as Router, Routes , Route, Navigate } from "react-router-dom";
import Login from "./Login/Login";
import Home from "./Home/Home";
import Protected from "./Protected/Protected";
import NotFound from "./NotFound/NotFound";
import Topbar from "./Topbar/Topbar";
import UserContext from "./UserContext";


const App = () => {
const [isLoggedIn , setIsLoggedIn] = useState(false);
const [token , setToken] = useState("")
const checkIfLoggedIn = (event) => {
  setIsLoggedIn(event);
};

// let accessToken = "";

const checkToken = (event) => {
  setToken(event);
  localStorage.setItem("accessToken", event);
};

  return (
  <UserContext.Provider value={token}>
    <Router>
      {isLoggedIn ? <Topbar /> : null}
      <Routes>
        {!isLoggedIn ? (
          <Route exact path="/" element={<Login checkIfLoggedIn={checkIfLoggedIn} checkToken={checkToken} />} />
        ) : (
         <Route path="/" element={<Navigate to="/home" />}/>
        )}
        {isLoggedIn ? <Route path="/home" element={<Home />} /> : null}
        (
        <Route path="/protected" element={<Protected />} />
        ) <Route path="/notfound" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/notfound" />} />
      </Routes>
    </Router>
  </UserContext.Provider>
  );
};

export default App;
