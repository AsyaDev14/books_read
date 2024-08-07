import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import { LoginPage } from "../pages/login/LoginPage";
import { RegisterPage } from "../pages/register/RegisterPage";
import { Recommended } from "../pages/recommended/Recommended";
import { getLocalStorageToken } from "../js/Api";

export const MainRouter = () => {
  const location = useLocation();
  const [token, setToken] = useState("");

  useEffect(() => {
    const localStoragetoken = getLocalStorageToken();
    setToken(localStoragetoken);
  }, [location.pathname]);

  return (
    <>
      {!token ? (
        <Routes>
          <Route path="/" element={<Navigate to="/register" />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Navigate to="/recommended" />} />
          <Route path="/recommended" element={<Recommended />} />
        </Routes>
      )}
    </>
  );
};
