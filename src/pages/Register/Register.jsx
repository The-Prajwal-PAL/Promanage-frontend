import { useState } from "react";
import {
  LoginInput,
  PasswordInput,
  RegisterButton,
  Welcome,
} from "../../components";
import "./Register.css";
import { toast } from "sonner";
import { useRegisterMutation } from "../../store/api/api";
import { useNavigate, Link } from "react-router-dom";
const Register = () => {
  const [inputVal, setInputVal] = useState({
    name: "",
    email: "",
    password: "",
    cnfpwd: "",
  });

  const navigate = useNavigate();
  const [register, { isLoading, isError, error }] = useRegisterMutation();
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      if (inputVal.password !== inputVal.cnfpwd) {
        toast.error("Password not matched");
      } else {
        const result = await register({
          name: inputVal.name,
          email: inputVal.email,
          password: inputVal.password,
        });
        if (result.error) {
          toast.error(result.error.data.message);
        } else {
          navigate("/login");
          toast.success("Successfully registered, login Now");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="dash-container">
      <Welcome />
      <div className="form-container">
        <h4>Register</h4>
        <div className="register-login">
          <LoginInput
            name="name"
            value={inputVal.name}
            setValue={setInputVal}
            placeholder="person"
            type="name"
            icon="name"
          />
          <LoginInput
            name="email"
            value={inputVal.email}
            setValue={setInputVal}
            placeholder="email"
            type="text"
            icon="email"
          />
          <PasswordInput
            placeholder="password"
            type="password"
            icon="password"
            name="password"
            value={inputVal.password}
            setValue={setInputVal}
          />
          <PasswordInput
            placeholder="confirm password"
            type="password"
            icon="password"
            value={inputVal.cnfpwd}
            setValue={setInputVal}
            name="cnfpwd"
          />
        </div>
        <div className="buttons-login">
          <RegisterButton
            onclick={submitHandler}
            text="register"
            color="#ffffff"
            border="none"
            bg="#17A2B8"
          />
          <p className="noLogin-text">Have no account yet?</p>
          <Link style={{ textDecoration: "none" }} to={"/login"}>
            <RegisterButton
              text="login"
              color="#17A2B8"
              border="1px solid #17A2B8"
              bg="#ffffff"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
