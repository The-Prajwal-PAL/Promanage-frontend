import './Button.css'
const Button = ({
  text,
  shadow = '',
  width = '300px',
  bg,
  color,
  border,
  onclick,
}) => {
  const buttonStyle = {
    width: width,
    backgroundColor: bg,
    color: color,
    border: border,
    boxShadow: shadow,
  }
  return (
    <button
      onClick={onclick}
      style={buttonStyle}
      className="button "
    >
      {text}
    </button>
  )
}

export { Button }
