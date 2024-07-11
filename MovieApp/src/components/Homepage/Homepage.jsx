import React from "react";
import { Link } from 'react-router-dom';
import "./Homepage.scss";

const Homepage = ({ remoteRoutes }) => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Home Page!</p>
      <h2>Remote Routes</h2>
      <ul>
        {remoteRoutes.map((route, index) => (
          route.path ? (
            <li key={index}>
              <Link to={route.path}>{route.path}</Link>
            </li>
          ) : null
        ))}
      </ul>
    </div>
  );
};

export default Homepage;
