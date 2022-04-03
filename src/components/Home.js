import React from "react";
import { Outlet } from "react-router-dom";
import LeftPanel from "./Leftpanel";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <LeftPanel />
      <div className="dashboard_panel">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
