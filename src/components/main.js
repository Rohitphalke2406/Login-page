import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./signIn";
import SignUp from "./signUp";
import Details from "./details";

const Main = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />

        <Route path="/signup" element={<SignUp />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </Router>
  );
};

export default Main;