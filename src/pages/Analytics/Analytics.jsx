import { useSelector } from 'react-redux'
import { Analytics } from '../../components'
import './Analytics.css'
const AnalyticsPage = () => {
  const {
    BACKLOG,
    DONE,
    TODO,
    PROGRESS,
    LowPr,
    HighPr,
    ModeratePr,
    dueDateTasks,
  } = useSelector((state) => state.task)

  const items = [
    { name: 'Backlog Tasks', count: BACKLOG },
    { name: 'Todo Tasks', count: TODO },
    { name: 'In-Progress Tasks', count: PROGRESS },
    { name: 'Completed Tasks', count: DONE },
  ]

  const items2 = [
    { name: 'Low Priority', count: LowPr },
    { name: 'Moderate Priority', count: ModeratePr },
    { name: 'High Priority', count: HighPr },
    { name: 'Due Date Tasks', count: dueDateTasks },
  ]

  return (
    <div className="analytics-container">
      <div className="analytics-heading">
        <h3>Analytics</h3>
      </div>
      <div className="analytic-card-container">
        <Analytics items={items} />
        <Analytics items={items2} />
      </div>
    </div>
  )
}

export default AnalyticsPage
