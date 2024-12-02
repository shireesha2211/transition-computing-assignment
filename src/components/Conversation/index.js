import {IoIosClose, IoIosMore, IoIosCheckbox} from 'react-icons/io'
import {MdCheckBoxOutlineBlank} from 'react-icons/md'
import {FaCheck} from 'react-icons/fa6'
import {GrAttachment} from 'react-icons/gr'
import {BiSend} from 'react-icons/bi'

import './index.css'

const Conversation = () => (
  <div className="conversation-container">
    <div className="conversation-header">
      <h1 className="heading active-heading">Conversation</h1>
      <h1 className="heading">
        Address Update <IoIosClose />
      </h1>
      <h1 className="heading ">
        Fee Reversal <IoIosClose />
      </h1>
      <h1 className="escalate">Escalate</h1>
    </div>
    <div className="conversation-card">
      <div className="conversation-header-card">
        <h1 className="attachment active-heading">Conversation</h1>
        <h1 className="attachment">Attachment</h1>
      </div>
      <p className="description">
        Lorem ipsum dolor sit amet consectetur. Et tincidunt odio vivamus ac
        aliquam. Placerat maecenas quis ut elementum praesent imperdiet.
      </p>
      <div className="card-description">
        <div className="conversation-person">
          <div className="section-cb">
            <p className="cb">CB</p>
          </div>
          <div>
            <h1 className="user-name">Rachel Adams</h1>
            <p className="time">
              9:08PM . Received By WhatsApp <FaCheck color=" #0F8BFD" />
            </p>
          </div>
        </div>
        <IoIosMore color="#101828" />
      </div>
      <p className="description">
        Lorem ipsum dolor sit amet consectetur. Et tincidunt odio vivamus ac
        aliquam. Placerat maecenas quis ut elementum praesent imperdiet. Egestas
        mattis pellentesque nibh dui sed malesuada dolor eget ipsum. Molestie
        nam morbi id arcu volutpat arcu.
      </p>
      <div className="card-description">
        <div className="conversation-person">
          <div className="section-cb">
            <p className="cb">HK</p>
          </div>
          <div>
            <h1 className="user-name">You</h1>
            <p className="time">
              27Jul, 2024 9:08PM . Send By WhatsApp <FaCheck color=" #0F8BFD" />
            </p>
          </div>
        </div>
        <IoIosMore color="#101828" />
      </div>
      <p className="description send">
        Lorem ipsum dolor sit amet consectetur. Et tincidunt odio vivamus ac
        aliquam. Placerat maecenas quis ut elementum praesent imperdiet. Egestas
        mattis pellentesque nibh dui sed malesuada dolor eget ipsum. Molestie
        nam morbi id arcu volutpat arcu.
      </p>
      <div className="sms-card">
        <h1 className="sms">
          <IoIosCheckbox /> SMS
        </h1>
        <h1 className="whatsapp">
          <MdCheckBoxOutlineBlank /> WhatsApp
        </h1>
        <h1 className="sms">
          <IoIosCheckbox /> Email
        </h1>
      </div>
      <div className="sms-card">
        <h1 className="type">Type a message..</h1>
        <GrAttachment className="icons" />
        <button type="button" className="send-button">
          <BiSend /> Send
        </button>
      </div>
    </div>
  </div>
)

export default Conversation
