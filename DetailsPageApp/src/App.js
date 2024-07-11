import React from "react";
import { Routes, Route } from 'react-router-dom';
import routes from './components/DetailsContent/routes.jsx';
import "./App.scss";

const App = () => {
  return (
    <div>
      <h1>Hello</h1>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
    
  );
};

export default App;
