import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import UserHome from "./Components/UserHome/userHome"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="user" element={<UserHome />} />
    </Routes>
  );
};

export default App;
