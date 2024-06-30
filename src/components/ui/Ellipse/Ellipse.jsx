import "./Ellipse.css";
const Ellipse = ({ bg }) => {
  const styles = {
    backgroundColor: bg,
  };
  return <div style={styles} className="ellipse"></div>;
};

export { Ellipse };
