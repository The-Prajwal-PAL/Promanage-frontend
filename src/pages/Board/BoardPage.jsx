import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Cardholder, Dropdown } from "../../components";
import { useGetDateFilterQuery } from "../../store/api/todoapi";
import { DateToday } from "../../utils/date";
import "./Board.css";
import { setFlter } from "../../store/slices/filterSlice";
import { setAnalytics } from "../../store/slices/taskSlice";
const BoardPage = () => {
  const inital = useSelector((state) => state.fil.fil.filterType);
  const [filter, setFilter] = useState(inital);
  const dispatch = useDispatch();
  const {
    userInfo: { userName },
  } = useSelector((state) => state.auth);
  const { data, refetch, isSuccess } = useGetDateFilterQuery(filter);
  useEffect(() => {
    refetch();
  }, []);
  if (isSuccess) {
    dispatch(setFlter(filter));
    console.log(data);
    dispatch(setAnalytics(data?.lengths));
  }

  return (
    <div className="board-container">
      <div className="board-upper">
        <div className="board-upper-content">
          <div className="board-welcome-text">
            <div className="w-text">Welcome! {userName}</div>
            <div className="w-date">{DateToday}</div>
          </div>
          <div className="board-heading">
            <p className="board-heading-text">Board</p>
            <Dropdown setFilter={(data) => setFilter(data)} />
          </div>
        </div>
      </div>
      <div className="board-wrapper">
        <div className="board-cards">
          <Cardholder
            todos={data?.filteredTodos?.BACKLOG}
            heading="Backlog"
            plusSymbol={false}
          />
          <Cardholder
            todos={data?.filteredTodos?.TODO}
            heading="To-do"
            plusSymbol={true}
          />
          <Cardholder
            todos={data?.filteredTodos?.PROGRESS}
            heading="Progress"
            plusSymbol={false}
          />
          <Cardholder
            heading="Done"
            todos={data?.filteredTodos?.DONE}
            plusSymbol={false}
          />
        </div>
      </div>
    </div>
  );
};

export default BoardPage;
