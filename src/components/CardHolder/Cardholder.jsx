import { useState } from 'react'
import fold from '../../assets/fold.svg'
import plus from '../../assets/plus.svg'
import './Cardholder.css'
import { InputModal } from '../Modal/InputModal/inputModal'
import { DisplayCard } from '../DisplayCard/DisplayCard'
import { EditModal } from '../Modal/EditModal/EditModal'

const Cardholder = ({ heading, plusSymbol, todos }) => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  let displaycards
  if (todos) {
    displaycards = [...todos]
  } else {
    displaycards = []
  }
  const [folded, setFolded] = useState(false)
  const handleFoldClick = () => {
    setFolded(true)
  }

  return (
    <div className="card-container">
      <div className="Card-Header-up">
        <h4>{heading}</h4>
        <div className="Card-icons-up">
          {plusSymbol && (
            <img
              onClick={() => setIsModalVisible(true)}
              src={plus}
            />
          )}
          <img
            src={fold}
            onClick={handleFoldClick}
          />
        </div>
        {isModalVisible && (
          <InputModal closeModal={() => setIsModalVisible(false)} />
        )}
      </div>
      <div className="board-card-container">
        {displaycards.map((item, index) => (
          <DisplayCard
            key={index}
            {...item}
            heading={heading}
            folded={folded}
            setFolded={setFolded}
          />
        ))}
      </div>
    </div>
  )
}
export { Cardholder }
