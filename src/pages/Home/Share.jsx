import { Ellipse, RedDateBadge, Taskshow } from "../../components";
import "./Share.css";
import promanage from "../../assets/promanage-icon.svg";
import { getFormattedDate } from "../../utils/formatDate";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const Share = () => {
  const { _id } = useParams();
  const [data, setTodoData] = useState(null);
  const [priority, setPriority] = useState("");
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://pro-manage-46mq.onrender.com/share/${_id}`,
        );
        setTodoData(response.data);
        setPriority(response.data?.todo.priority);
        setDate(response.data?.todo.date);
        setTitle(response.data?.todo.title);
        setTasks(response.data?.todo.tasks);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [_id._id]);

  console.log(data);
  console.log(title);
  let bg =
    priority === "HIGH"
      ? "#FF2473"
      : priority === "MODERATE"
        ? "#18B0FF"
        : "#63C05B";
  let dueDate = date ? getFormattedDate(date) : "";
  const done = tasks.reduce((acc, curr) => {
    acc += curr.completed ? 1 : 0;
    return acc;
  }, 0);
  return (
    <div className="share-page">
      <div className="share-head share-items share-heading">
        <img src={promanage} />
        <p>Pro Manage</p>
      </div>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="share-container">
          <div className="share-content">
            <div className="share-card-prior">
              <Ellipse bg={"red"} />
              <div className="share-card-priority-text">{`${priority} PRIORITY`}</div>
            </div>
            <div className="share-card-heading">
              <div
                className="share-card-heading-text todo-card-heading-text"
                title={title}
              >
                {title}
              </div>
            </div>
            <div className="share-card-checklist">
              <div className="share-checklist-heading">
                <h2>Checklist ({`${done}/${tasks.length}`})</h2>
              </div>
              <div className="share-checklist-content">
                {tasks.map((item, index) => {
                  return <Taskshow key={index} task={item} />;
                })}
              </div>
            </div>
            {dueDate !== "" && (
              <div className="share-due-date">
                <div className="due">Due Date</div>
                <RedDateBadge>Feb 20th</RedDateBadge>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
