import {CiLocationOn, CiCirclePlus} from 'react-icons/ci'
import {BsThreeDotsVertical} from 'react-icons/bs'
import {MdOutlinePersonAddAlt} from 'react-icons/md'
import {IoMdPie} from 'react-icons/io'

import './index.css'

const Profile = () => (
  <div className="profile-container">
    <div className="profile-sub-card">
      <div className="cb-card">
        <h1 className="profile-cb">CB</h1>
      </div>
      <div>
        <h1 className="profile-name">Hannibal Smith</h1>
        <p className="profile-detail">
          <CiLocationOn /> 1 Market Street San Francisco, CA 94105
        </p>
      </div>
    </div>
    <div className="detail-card">
      <div className="detail-sub-card">
        <h1 className="details">Customer ID</h1>
        <div>
          <h1 className="card-details">
            12345 <BsThreeDotsVertical color="#0F1729" />
          </h1>
        </div>
      </div>
      <hr className="hr" />
      <div className="detail-sub-card">
        <h1 className="details">Email Address</h1>
        <div>
          <h1 className="card-details">
            Rachel@sample.com <BsThreeDotsVertical />
          </h1>
        </div>
      </div>
      <hr className="hr" />
      <div className="detail-sub-card">
        <h1 className="details">Phone Number</h1>
        <div>
          <h1 className="card-details">
            9051298905 <BsThreeDotsVertical />
          </h1>
        </div>
      </div>
      <div className="add-card">
        <button type="button" className="add-button">
          <CiCirclePlus color="#0A061A" /> Add
        </button>
      </div>
    </div>
    <div className="detail-card">
      <div className="detail-sub-card">
        <h1 className="details">Loyalty Tier</h1>
        <div>
          <h1 className="card-details">
            Silver <BsThreeDotsVertical color="#0F1729" />
          </h1>
        </div>
      </div>
      <hr className="hr" />
      <div className="detail-sub-card">
        <h1 className="details">Segment</h1>
        <div>
          <h1 className="card-details">
            Sleepy Customer <BsThreeDotsVertical />
          </h1>
        </div>
      </div>
      <div className="add-card">
        <button type="button" className="add-button">
          <CiCirclePlus color="#0A061A" /> Add
        </button>
      </div>
    </div>
    <div className="detail-card">
      <div className="detail-sub-card">
        <h1 className="details">Lifetime Value</h1>
        <div>
          <h1 className="card-details">
            $ 1M <BsThreeDotsVertical color="#0F1729" />
          </h1>
        </div>
      </div>
      <hr className="hr" />
      <div className="detail-sub-card">
        <h1 className="details">Propensity to Purchase</h1>
        <div>
          <h1 className="card-details">
            <IoMdPie color="#D7AF48" /> 75% <BsThreeDotsVertical />
          </h1>
        </div>
      </div>
      <div className="add-card">
        <button type="button" className="add-button">
          <CiCirclePlus color="#0A061A" /> Add
        </button>
      </div>
    </div>
    <div className="detail-card">
      <div className="detail-sub-card">
        <h1 className="details">Engagement Score</h1>
        <div>
          <h1 className="card-details">
            <IoMdPie color="#48D756" /> 80%
            <BsThreeDotsVertical color="#0F1729" />
          </h1>
        </div>
      </div>
      <div className="add-card">
        <button type="button" className="add-button">
          <CiCirclePlus color="#0A061A" /> Add
        </button>
      </div>
    </div>
    <button type="button" className="assign-button">
      <MdOutlinePersonAddAlt /> Assign other Agent
    </button>
    <button type="button" className="add-new-button">
      Add New Widget
    </button>
  </div>
)

export default Profile
