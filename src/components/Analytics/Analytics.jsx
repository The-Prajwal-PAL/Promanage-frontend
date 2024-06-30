import "./Analytics.css";
import { Ellipse } from "../ui/Ellipse/Ellipse";
const Analytics = ({ items }) => {
  return (
    <div className="analytics-card">
      <div className="card-list">
        {items.map((item, index) => (
          <div className="card-list-element" key={index}>
            <div className="card-list-elements">
              <Ellipse bg="#90C4CC " />
              <div className="element-item-text">{item.name}</div>
            </div>
            <h1 className="element-item-number">{item.count}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Analytics };

