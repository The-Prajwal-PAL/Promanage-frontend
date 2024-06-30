import { Sidebar } from "../../components/index.js";
import "./Dashboard.css";
import { Outlet } from "react-router-dom";
const Dashboard = () => {
  return (
    <div className="Dash-container">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Dashboard;
