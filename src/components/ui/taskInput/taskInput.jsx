import deleteIcon from '../../../assets/delete.svg'
import './taskInput.css'
import tick from '../../../assets/tick.svg'
const TaskInput = ({ value, completed, setComplete, setValue, deleteTask }) => {
  const styles = {
    backgroundColor: '#17A2B8',
    cursor: 'pointer',
  }
  return (
    <div className="inpt-container">
      <div className="inpt-contents">
        <div className="input-left">
          <div
            onClick={() => setComplete()}
            style={completed ? styles : {}}
            className="inpt-radio "
          >
            {completed && <img src={tick} />}{' '}
          </div>
          <input
            type="text"
            placeholder="Add a task"
            required
            value={value}
            onChange={(e) => {setValue(e.target.value)}}
          ></input>
        </div>
        <img
          onClick={deleteTask}
          src={deleteIcon}
          style={{ cursor: 'pointer' }}
        />
      </div>
    </div>
  )
}
export { TaskInput }
