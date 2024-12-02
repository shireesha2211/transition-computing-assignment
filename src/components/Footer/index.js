import {MdMailOutline} from 'react-icons/md'
import {BiSolidDownArrow, BiSend} from 'react-icons/bi'
import {IoEyeOutline, IoCopyOutline, IoSearch} from 'react-icons/io5'
import {CiCirclePlus} from 'react-icons/ci'
import {AiTwotonePushpin} from 'react-icons/ai'
import {HiOutlinePhotograph} from 'react-icons/hi'

import './index.css'

const Footer = () => (
  <div>
    <div className="footer-container">
      <div className="footer-sub-card">
        <h1 className="footer-heading">Ask Catura</h1>
        <h1 className="sub-heading">
          <MdMailOutline /> WhatsApp
          <BiSolidDownArrow color="#0F8BFD" />
        </h1>
        <h1 className="sub-heading">
          <MdMailOutline /> Greetings
          <BiSolidDownArrow color="#0F8BFD" />
        </h1>
      </div>
      <div className="template-card">
        <h1 className="template-heading">Greeting Template</h1>
        <div>
          <button type="button" className="template-button">
            <IoCopyOutline /> Copy to Send
          </button>
          <button type="button" className="template-button">
            <IoEyeOutline /> Preview
          </button>
        </div>
      </div>
      <div className="search-card">
        <p className="type">Type a message...</p>
        <div className="search-icon">
          <BiSend />
        </div>
      </div>
    </div>
    <div className="footer-container">
      <h1 className="footer-heading">Action Launcher</h1>
      <hr className="hr-line" />
      <div className="type">
        <IoSearch /> Search actions...
      </div>
      <button className="button active-button" type="button">
        <CiCirclePlus /> Add Action
      </button>
      <button type="button" className="button">
        Fee Reversal
      </button>
      <button type="button" className="button">
        Retail Onboarding
      </button>
      <button type="button" className="button">
        Address Update
      </button>
    </div>
    <div className="footer-container">
      <h1 className="footer-heading">
        <AiTwotonePushpin color=" #0F8BFD" /> Case Favorite
      </h1>
      <p className="type">
        Lorem ipsum dolor sit amet consectetur. Et tincidunt{' '}
      </p>
      <p className="type">
        <HiOutlinePhotograph /> Photo
      </p>
      <p className="type">
        Lorem ipsum dolor sit amet consectetur. Et tincidunt{' '}
      </p>
    </div>
  </div>
)

export default Footer
