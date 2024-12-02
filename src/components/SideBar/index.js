import {FaAngleRight, FaLink} from 'react-icons/fa'
import {TbMessage2Search} from 'react-icons/tb'
import {RiGroupLine} from 'react-icons/ri'
import {IoPersonOutline, IoCubeOutline} from 'react-icons/io5'
import {ImTree} from 'react-icons/im'
import {FiTool} from 'react-icons/fi'
import {GoGift} from 'react-icons/go'
import {HiOutlineSparkles} from 'react-icons/hi'
import {PiNumberCircleOne, PiNumberCircleTwo} from 'react-icons/pi'

import './index.css'

const SideBar = () => (
  <div className="sidebar-container">
    <img alt="risk Hawk" className="risk-image" />
    <div className="sidebar-card">
      <TbMessage2Search className="sidebar-icon" />
      <h1 className="sidebar-text">Internal Audit</h1>
      <FaAngleRight className="sidebar-arrowicon" />
    </div>
    <div className="sidebar-card">
      <TbMessage2Search className="sidebar-icon" />
      <h1 className="sidebar-text">UAT Testing</h1>
    </div>
    <div className="sidebar-card">
      <FaLink className="sidebar-icon" />
      <h1 className="sidebar-text">Intract</h1>
      <FaAngleRight className="sidebar-arrowicon" />
    </div>
    <div className="sidebar-card">
      <RiGroupLine className="sidebar-icon" color=" #0F8BFD" />
      <h1 className="sidebar-text active-sidebar">Queue</h1>
    </div>
    <div className="sidebar-card">
      <ImTree className="sidebar-icon" />
      <h1 className="sidebar-text">Workflow</h1>
    </div>
    <div className="sidebar-card">
      <IoPersonOutline className="sidebar-icon" />
      <h1 className="sidebar-text">Admin</h1>
    </div>
    <div className="sidebar-card">
      <IoCubeOutline className="sidebar-icon" />
      <h1 className="sidebar-text">Asset</h1>
    </div>
    <div className="sidebar-card">
      <RiGroupLine className="sidebar-icon" />
      <h1 className="sidebar-text">Parent</h1>
    </div>
    <div className="sidebar-card">
      <PiNumberCircleOne className="sidebar-icon" />
      <h1 className="sidebar-text">Option One</h1>
    </div>
    <div className="sidebar-card">
      <PiNumberCircleTwo className="sidebar-icon" />
      <h1 className="sidebar-text">option Two</h1>
    </div>
    <div className="sidebar-card">
      <FiTool className="sidebar-icon" />
      <h1 className="sidebar-text">All Accessories</h1>
    </div>
    <div className="sidebar-card">
      <TbMessage2Search className="sidebar-icon" />
      <h1 className="sidebar-text">Internal Audit</h1>
      <FaAngleRight className="sidebar-arrowicon" />
    </div>
    <div className="sidebar-card">
      <HiOutlineSparkles className="sidebar-icon" />
      <h1 className="sidebar-text">Decorating</h1>
      <FaAngleRight className="sidebar-arrowicon" />
    </div>
    <div className="sidebar-card">
      <GoGift className="sidebar-icon" />
      <h1 className="sidebar-text">Presenting</h1>
    </div>
  </div>
)

export default SideBar
