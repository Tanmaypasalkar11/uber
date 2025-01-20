import React from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignup from "./pages/CaptainSignup";
import Start from "./pages/Start";
import UserProtected from "./pages/UserProtected";
import UserLogout from "./pages/UserLogout";
import CaptainHome from "./pages/CaptainHome";
import CaptainProtected from "./pages/CaptainProtectedRapper";
import Riding from "./pages/Riding";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/riding" element={<Riding />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route
          path="/home"
          element={
            <UserProtected>
              <Home />
            </UserProtected>
          }
        />
        <Route
          path="/user/logout"
          element={
            <UserProtected>
              <UserLogout />
            </UserProtected>
          }
        />
        <Route
          path="/captain-home"
          element={
            <CaptainProtected>
              <CaptainHome />
            </CaptainProtected>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
