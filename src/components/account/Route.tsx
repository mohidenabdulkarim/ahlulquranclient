import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../../App";
import Register from "./Register";


interface IProps {
  history: any;
}
export const Routs: React.FC<IProps> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/account/*' element={<Register />} />
        <Route path='/*' element={<App />} />
        <Route path='' element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};
