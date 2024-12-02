import SideBar from '../SideBar'
import Header from '../Header'
import Profile from '../Profile'
import Conversation from '../Conversation'
import Footer from '../Footer'

import './index.css'

const Home = () => (
  <div className="container">
    <SideBar />
    <div className="bg-container">
      <Header />
      <div className="card">
        <Profile />
        <Conversation />
        <Footer />
      </div>
    </div>
  </div>
)

export default Home
