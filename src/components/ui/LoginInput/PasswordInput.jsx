import { useState } from "react";
import eye from "../../../assets/eye.svg";
import password from "../../../assets/password.svg";
import "./PasswordInput.css";
const PasswordInput = ({ placeholder, value, name, setValue }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <div className="login-input">
      <img src={password} className="icon" />
      <input
        value={value}
        onChange={(e) => {
          setValue((prevInpt) => ({
            ...prevInpt,
            [name]: e.target.value,
          }));
        }}
        type={isPasswordVisible ? "text" : "password"}
        placeholder={placeholder}
      />
      <img
        style={{
          cursor: "pointer",
        }}
        onClick={() => setIsPasswordVisible(!isPasswordVisible)}
        src={eye}
        className="icon-2 icon"
        alt="Eye icon"
      />
    </div>
  );
};

export { PasswordInput };
