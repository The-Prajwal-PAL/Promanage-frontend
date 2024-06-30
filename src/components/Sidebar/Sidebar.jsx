import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import analytics from "../../assets/analytics.svg";
import board from "../../assets/board.svg";
import logout from "../../assets/logout.svg";
import promanage from "../../assets/promanage-icon.svg";
import settings from "../../assets/settings.svg";
import { useLogOutMutation } from "../../store/api/api";
import { logOut } from "../../store/slices/authSlice";
import { ModalComponent } from "../Modal/ModelComponent/ModalComponent";
import "./Sidebar.css";
const Sidebar = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const sideElementStyle = {
    backgroundColor: "#4391ed1a",
    cursor: "pointer",
  };
  return (
    <div className="sidebar-container">
      <div className="sidebar-element-head">
        <div className="sidebar-head sidebar-items">
          <img src={promanage} />
          <p>Pro Manage</p>
        </div>
      </div>
      <div className="sidebar-items-group">
        <div className="sidebar-element-tails">
          <div className="isAc">
            <NavLink to={"dash"} className=" sidebar-element">
              <div className="sidebar-board sidebar-items">
                <img src={board} />
                <p>Board</p>
              </div>
            </NavLink>
          </div>
          <div className="isAc">
            <NavLink to={"analytics"} className="sidebar-element">
              <div className="sidebar-analytics sidebar-items">
                <img src={analytics} />
                <p>Analytics</p>
              </div>
            </NavLink>
          </div>
          <div className="isAc">
            <NavLink to={"settings"} className="sidebar-element">
              <div className="sidebar-settings sidebar-items">
                <img src={settings} />
                <p>Settings</p>
              </div>
            </NavLink>
          </div>
        </div>
        <div className="logout-container">
          <div className="logout-item">
            <div
              onClick={() => setIsModalVisible(true)}
              className="sidebar-logout logout-items"
            >
              <img src={logout} />
              <p className="logout">Logout</p>
            </div>
            {isModalVisible && (
              <ModalComponent closeModal={() => setIsModalVisible(false)}>
                Logout
              </ModalComponent>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Sidebar };
