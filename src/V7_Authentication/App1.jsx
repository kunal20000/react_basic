import React, { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { SignUp } from "./pages/SignUp";
import { Orders } from "./pages/Orders";
import { Profile } from "./pages/Profile";
import { AuthProvider } from "./providers/AuthProvider";
import { Logout } from "./pages/Logout";
import { AuthNavigator } from "./navigator/AuthNavigator";

export const App1 = () => {
  return (
    <>
      <AuthProvider>
        <main>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={
            <AuthNavigator>
              <Profile />
            </AuthNavigator>} />
            <Route path="/orders" element={
            <AuthNavigator>
              <Orders />
            </AuthNavigator>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/logout" element={<Logout />} />

            <Route path="*" element={<h3>Page Not Found !!</h3>} />
          </Routes>
          <Footer />
        </main>
      </AuthProvider>
    </>
  );
};
