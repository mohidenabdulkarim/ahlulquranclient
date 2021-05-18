import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Register from "./components/account/Register"

interface IProps {
  history: any;
}
export const AppRoutes: React.FC<IProps> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/account/*' element={<Register />} />
        <Route path='/register' element={<Register />} />
        <Route path='/*' element={<App />} />
        <Route path='' element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};
