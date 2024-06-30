import { useState } from "react";
import "./Register.css";

const RegisterButton = ({ text = "xyz", bg, color, border, onclick, hovercolor }) => {
  const [isHovered, setIsHovered] = useState(false)
  const buttonStyle = {
    backgroundColor: bg,
    color: isHovered ? hovercolor : color,
    border: border,
  };
  return (
    <button style={buttonStyle} onClick={onclick} className="buttons" id="butt" onMouseOver={()=> setIsHovered(true)} onMouseOut={()=>setIsHovered(false)}>
      {text}
    </button>
  );
};

export { RegisterButton };
