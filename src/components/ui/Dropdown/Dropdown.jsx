import { useDispatch, useSelector } from 'react-redux'
import './Dropdown.css'
import { setFlter } from '../../../store/slices/filterSlice';
const Dropdown = ({ setFilter }) => {
  const dispatch = useDispatch();
  const filoption = useSelector(state=>state.fil.fil.filterType)
 
  const handleFilterChange = (event) => {
    const selectedFilter = event.target.value
    setFilter(selectedFilter)
    dispatch(setFlter(event.target.value))
  }
  return (
    <div className="dropdown-container">
      <select
        className="dropdown-select"
        onChange={handleFilterChange}
        value={filoption}
      >
        <option value="week">This Week</option>
        <option value="day">Today</option>
        <option value="month">This Month</option>
      </select>
    </div>
  )
}

export { Dropdown }
