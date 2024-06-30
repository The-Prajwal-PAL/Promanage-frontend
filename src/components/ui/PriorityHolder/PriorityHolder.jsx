import { useState, useEffect } from 'react'
import { Ellipse } from '../Ellipse/Ellipse'
import './PriorityHolder.css'

const PriorityHolder = ({ children, setPriority, priority }) => {
  const [isActive, setIsActive] = useState(false)
  let width, bg
  width =
    children === 'HIGH' ? '135px' : children === 'MODERATE' ? '175px' : '132px'
  bg =
    children === 'HIGH'
      ? '#FF2473'
      : children === 'MODERATE'
      ? '#18B0FF'
      : '#63C05B'
  const styles = {
    width: width,
    backgroundColor: isActive ? '#EEECEC' : 'white',
  }
  useEffect(() => {
    setIsActive(children === priority)
  }, [priority, children])

  return (
    <div
      onClick={() => {
        setPriority(children)
        setIsActive(true)
      }}
      style={styles}
      className="pr-container"
    >
      <Ellipse bg={bg} />
      <p> {`${children} PRIORITY`}</p>
    </div>
  )
}

export { PriorityHolder }
