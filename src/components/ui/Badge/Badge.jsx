import "./Badge.css";
const Badge = ({ children, width, onclick }) => {
  const styles = {
    width: width,
  };
  return (
    <div onClick={onclick} style={styles} className="badge-container">
      {children}
    </div>
  );
};

const DateBadge = ({ children }) => {
  const styles = {
    width: "53px",
    backgroundColor: "#DBDBDB",
    color: "#5a5a5a",
  };
  return (
    <div style={styles} className="badge-container">
      {children}
    </div>
  );
};

const RedDateBadge = ({ children }) => {
  const styles = {
    height: "22px",
    width: "53px",
    color: "#ffffff",
    backgroundColor: "#CF3636",
  };
  return (
    <div style={styles} className="badge-container">
      {children}
    </div>
  );
};
const GreenDateBadge = ({ children }) => {
  const styles = {
    height: "22px",
    width: "53px",
    color: "#ffffff",
    backgroundColor: "#63C05B",
  };
  return (
    <div style={styles} className="badge-container">
      {children}
    </div>
  );
};
export { Badge, DateBadge, GreenDateBadge, RedDateBadge };
