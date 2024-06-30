import email from "../../../assets/emial.svg";
import person from "../../../assets/person.svg";
import "./LoginInput.css";
const LoginInput = ({ placeholder, icon, type, value, setValue, name }) => {
  let ic;
  ic = icon === "email" ? email : person;
  return (
    <div className="login-input">
      <img src={ic} className="icon" />
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          setValue((prevInpt) => ({
            ...prevInpt,
            [name]: e.target.value,
          }));
        }}
      />
    </div>
  );
};
export { LoginInput };
