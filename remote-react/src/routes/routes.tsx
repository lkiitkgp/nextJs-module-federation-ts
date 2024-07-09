// routes.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContentC from "../pages/ContentC";
import ContentD from "../pages/ContentD";

const AppRoutes: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/contentC" element={<ContentC />} />
        <Route path="/contentD" element={<ContentD />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
