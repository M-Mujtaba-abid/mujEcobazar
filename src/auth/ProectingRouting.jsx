
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProectingRouting = () => {
  const isLogin = localStorage.getItem("login");

  return isLogin ? <Outlet /> : <Navigate to="/login" />;
};

export default ProectingRouting;
