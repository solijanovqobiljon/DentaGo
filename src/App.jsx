import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import UserHome from "./Components/UserHome/userHome"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="user" element={<UserHome />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
