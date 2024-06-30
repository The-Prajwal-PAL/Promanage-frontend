import deleteIcon from '../../../assets/delete.svg'
import '../taskInput/taskInput.css'
const Taskholder = () => {
  return (
    <div className="inpt-container">
      <div className="inpt-contents">
        <div className="input-left">
          <div className="inpt-radio"></div>
          <h3 style={{
            color:"#000000"
          }}>Title</h3>
        </div>
        <img src={deleteIcon} />
      </div>
    </div>
  )
}

export {
    Taskholder
} 
