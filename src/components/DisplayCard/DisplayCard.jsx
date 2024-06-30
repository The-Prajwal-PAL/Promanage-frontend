import {
  Badge,
  EditModal,
  EditShareModal,
  Ellipse,
  ModalComponent,
  RedDateBadge,
  Taskshow,
  DateBadge,
  GreenDateBadge,
} from "../index";
import "./DisplayCard.css";
import { useEffect, useState } from "react";
import dropdown from "../../assets/drop-down.svg";
import dropup from "../../assets/drop-up.svg";
import dots from "../../assets/three-dots.svg";
import { getFormattedDate } from "../../utils/formatDate";
import {
  useAddLabelMutation,
  useDeleteTodoMutation,
  useGetAllTodosQuery,
  useEditCheckMutation,
} from "../../store/api/todoapi";
import { toast } from "sonner";
const DisplayCard = ({
  priority = "HIGH",
  title = "",
  date,
  tasks = [],
  heading,
  _id,
  folded,
  setFolded,
}) => {
  const [labelAdd] = useAddLabelMutation();
  const [deleteTask] = useDeleteTodoMutation();
  const [drop, setDrop] = useState(false);
  const [taskss, setTasks] = useState([]);
  const [EditShare, setEditShare] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editTodo] = useEditCheckMutation();
  const [isDl, setIsDl] = useState(false);
  const { refetch, data } = useGetAllTodosQuery();
  const DueDateCrossed = new Date(date) < new Date();
  let bg =
    priority === "HIGH"
      ? "#FF2473"
      : priority === "MODERATE"
        ? "#18B0FF"
        : "#63C05B";
  let dueDate = date ? getFormattedDate(date) : "";
  const labels = [
    {
      label: "DONE",
      width: "34px",
    },
    { label: "TO-DO", width: "38px" },
    { label: "PROGRESS", width: "54px" },
    { label: "BACKLOG", width: "54px" },
  ];
  const handleLabelAdd = async (value) => {
    try {
      const response = await labelAdd({
        label: value,
        taskId: _id,
      });
      if (response.error) {
        toast.error("Label  updation failed");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const deleteHandler = async () => {
    try {
      const response = await deleteTask(_id);
      if (response.error) {
        return toast.error("task delete failed");
      }
      console.log();
      if (data?.todos.length <= 1) {
        window.location.href = "/";
      }
    } catch (error) {
      console.log(error);
    }
  };
  const submitHandler = async (dos, _id) => {
    try {
      const response = await editTodo({
        tasks: [...dos],
        taskId: _id,
      });
      if (response.error) {
        return toast.error(`${response.error.data.message}`);
      }
      refetch();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const handleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    const checkbool = updatedTasks[index].completed;
    updatedTasks[index] = { ...updatedTasks[index], completed: !checkbool };
    setTasks(updatedTasks);
    submitHandler([...updatedTasks], _id);
  };

  useEffect(() => {
    return () => {
      if (folded === false) {
        setDrop(false);
      }
    };
  }, [folded, deleteTask]);
  const done = tasks.reduce((acc, curr) => {
    acc += curr.completed ? 1 : 0;
    return acc;
  }, 0);

  return (
    <div className="todo-card-container">
      <div className="todo-card-content">
        <div className="todo-card-priority">
          <div className="todo-card-prior">
            <Ellipse bg={bg} />
            <div className="todo-card-priority-text">{`${priority} PRIORITY`}</div>
          </div>
          <div className="todo-cards-dots">
            <img
              src={dots}
              alt="dots"
              onClick={() => setEditShare(!EditShare)}
            />
          </div>
          {EditShare && (
            <div className="EditShare">
              <EditShareModal
                _id={_id}
                setVisible={() => {
                  setIsModalVisible(true);
                }}
                setIsDl={() => {
                  setIsDl(true);
                }}
                closeDots={() => setEditShare(false)}
              />
            </div>
          )}
        </div>
        <div className="todo-card-heading">
          {isDl && (
            <ModalComponent
              deleteTask={deleteHandler}
              closeModal={() => setIsDl(false)}
            >
              Delete
            </ModalComponent>
          )}
          {isModalVisible && (
            <EditModal
              _id={_id}
              closeModal={() => setIsModalVisible(false)}
              closeDots={() => setEditShare(false)}
            />
          )}
          <div className="todo-card-heading-text" title={title}>
            {title}
          </div>
        </div>
        <div className="todo-card-checklist">
          <div className="todo-checklist-heading">
            <h2>Checklist ({`${done}/${tasks.length}`})</h2>
            <div
              className="down-icon"
              onClick={() => {
                setDrop(!drop);
                setFolded(false);
              }}
            >
              {drop ? (
                <img src={dropup} alt="dropup" />
              ) : (
                <img src={dropdown} alt="dropdown" />
              )}
            </div>
          </div>
          {drop ? (
            <div className="todo-checklist-content">
              {tasks.map((item, index) => {
                return (
                  <Taskshow
                    key={index}
                    task={item}
                    tasks={tasks}
                    setComplete={() => handleTaskCompletion(index)}
                  />
                );
              })}
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="todo-card-progress">
          <div className="todo-card-progress-1">
            {dueDate !== "" &&
              (heading !== "Done" ? (
                DueDateCrossed ? (
                  <RedDateBadge>{dueDate}</RedDateBadge>
                ) : (
                  <DateBadge>{dueDate}</DateBadge>
                )
              ) : (
                <GreenDateBadge>{dueDate}</GreenDateBadge>
              ))}
          </div>
          <div className="todo-card-progress-2">
            {labels.map((x) => {
              if (x.label != heading.toUpperCase()) {
                return (
                  <Badge
                    key={x.label}
                    onclick={() => {
                      handleLabelAdd(x.label);
                    }}
                    width={x.width}
                  >
                    {x.label}
                  </Badge>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export { DisplayCard };
