import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { LoginInput, PasswordInput, RegisterButton } from "../../components";
import { useUpdateUserDetailsMutation } from "../../store/api/userProtectedApi";
import "./Settings.css";
import { setCredentials } from "../../store/slices/authSlice";
const SettingsPage = () => {
  const {
    userInfo: { userName },
  } = useSelector((state) => state.auth);

  const [inputVal, setInputVal] = useState({
    name: userName,
    Oldpassword: "",
    newPassword: "",
  });
  const dispatch = useDispatch();
  const [detailsUpdate] = useUpdateUserDetailsMutation();
  const submitHandler = async () => {
    try {
      const result = await detailsUpdate({
        name: inputVal.name,
        currentPassword: inputVal.Oldpassword,
        newPassword: inputVal.newPassword,
      });
      if (result.error) {
        return toast.error(`${result.error.data.message}`);
      }
      dispatch(setCredentials(result.data));

      toast.success("Profile updated successfully");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="set-container headd">
      <h3>Settings</h3>
      <div className="set-inputContainer">
        <LoginInput
          name="name"
          value={inputVal.name}
          setValue={setInputVal}
          placeholder="name"
          type="text"
          icon="name"
        />
        <PasswordInput
          name="Oldpassword"
          value={inputVal.Oldpassword}
          setValue={setInputVal}
          placeholder="Old password"
          type="password"
          icon="password"
        />
        <PasswordInput
          name="newPassword"
          value={inputVal.newPassword}
          setValue={setInputVal}
          placeholder="New password"
          type="password"
          icon="password"
        />
      </div>
      <RegisterButton
        onclick={submitHandler}
        text="Update"
        color="#ffffff"
        border="none"
        bg="#17A2B8"
      />
    </div>
  );
};

export default SettingsPage;
