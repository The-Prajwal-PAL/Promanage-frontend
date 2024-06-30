import "./ModalComponent.css";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLogOutMutation } from "../../../store/api/api";
import { Button } from "../../ui/Button/Button";
import "./ModalComponent.css";
import { logOut } from "../../../store/slices/authSlice";
import { toast } from "sonner";
import { setFlter } from "../../../store/slices/filterSlice";
import { setAnalytics } from "../../../store/slices/taskSlice";

const ModalComponent = ({ children, closeModal, deleteTask }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [LogOut] = useLogOutMutation();
  async function logoutHandler() {
    try {
      const response = await LogOut();
      if (response.error) {
        return toast.error("Logout failed");
      }
      dispatch(logOut());
      dispatch(setFlter("week"));
      navigate("/");
      toast.success("Logged Out succesfull!");
    } catch (error) {
      console.log(error);
    }
  }
  const Del = () => {
    deleteTask();
    closeModal();
  };
  return (
    <div className="outer">
      <div className="modal-container">
        <p>{`Are you sure you want to ${children}?`}</p>
        <div className="button-container">
          <Button
            className="one"
            text={`Yes, ${children}`}
            onclick={children === "Logout" ? logoutHandler : Del}
            width="300px"
            bg="#17a2bb"
            border="none"
            color="#ffffff"
          />
          <Button
            onclick={closeModal}
            text="Cancel"
            width="300px"
            bg={"#ffffff"}
            border={"1px solid #cf3636"}
            color="#cf3636"
          />
        </div>
      </div>
    </div>
  );
};

export { ModalComponent };
