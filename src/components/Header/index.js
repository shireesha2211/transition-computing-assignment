import {AiOutlineHome} from 'react-icons/ai'
import {FiSettings} from 'react-icons/fi'
import {FaArrowRightFromBracket} from 'react-icons/fa6'
import {FaAngleRight} from 'react-icons/fa'
import {PiChatsTeardrop} from 'react-icons/pi'

import './index.css'

const Header = () => {
  const section1 = () => (
    <div className="section1-container">
      <h1 className="header">Chat/Feed chat</h1>
      <div className="section-sub-card">
        <AiOutlineHome className="icon" />
        <p className="process">Process Owner HOD</p>
        <button type="button" className="admin-button">
          Admin
        </button>
        <p className="name">Palak Bansai</p>
        <img alt="profile" className="profile" />
        <FiSettings className="icon" />
        <button type="button" className="logout-button">
          <FaArrowRightFromBracket className="icon" /> Logout
        </button>
      </div>
    </div>
  )

  const section2 = () => (
    <div className="section2-container">
      <div className="section2-sub-card">
        <div className="div">
          <h1 className="cb">CB</h1>
        </div>
        <p className="cb-text">Cheyenne Bergson</p>
      </div>
      <div className="section2-sub-card">
        <div className="div">
          <h1 className="cb">CB</h1>
        </div>
        <p className="cb-text">Jonathan Higgins</p>
      </div>
      <div className="section2-sub-card">
        <div className="div">
          <h1 className="cb">CB</h1>
        </div>
        <p className="cb-text active">Hannibai smi..</p>
      </div>
      <div className="section2-sub-card">
        <div className="div">
          <h1 className="cb">CB</h1>
        </div>
        <p className="cb-text">Capt. Trunk</p>
      </div>

      <div className="section2-sub-card-message">
        <PiChatsTeardrop color="#ffffff" />
        <p className="text">Messaging</p>
        <FaAngleRight color="#ffffff" />
      </div>
    </div>
  )

  return (
    <>
      {section1()}
      {section2()}
    </>
  )
}

export default Header
