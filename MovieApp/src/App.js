import React, { useState, useEffect } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage.jsx"

const loadRemoteRoutes = async () => {
  const remoteRoutes = await import('detailspage/RemoteRoutes');
  console.log('remoteRoutes: ', remoteRoutes)
  return remoteRoutes.default;
};

const App = () => {
  const [remoteRoutes, setRemoteRoutes] = useState([]);

  useEffect(() => {
    const fetchRemoteRoutes = async () => {
      const routes = await loadRemoteRoutes();
      const prefixedRoutes = routes.map(route => ({
        ...route,
        path: `/remoteApp${route.path}`
      }));
      setRemoteRoutes(prefixedRoutes);
    };

    fetchRemoteRoutes();
  }, []);

  return (
    <div>
        <React.Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Homepage remoteRoutes={remoteRoutes} />} />
            {/* Dynamically include remote routes */}
            {remoteRoutes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </React.Suspense>
    </div>
  );
};

export default App;
