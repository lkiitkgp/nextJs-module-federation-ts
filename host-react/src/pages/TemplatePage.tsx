// src/pages/TemplatePage.tsx
import React from "react";
import Layout from "../components/Layout";

const TemplatePage: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return <Layout>{children}</Layout>;
};

export default TemplatePage;
