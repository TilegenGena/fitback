import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminProvider from "./context/AdminProvider";
import AllFitbacks from "./pages/AllFitbacks";
import Fitback from "./pages/Fitback";

const Myroutes = () => {
  return (
    <AdminProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Fitback />} />
          <Route path="/fitbacks" element={<AllFitbacks />} />
        </Routes>
      </BrowserRouter>
    </AdminProvider>
  );
};

export default Myroutes;
