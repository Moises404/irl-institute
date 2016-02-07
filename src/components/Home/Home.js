import React from 'react'
import DumbComponent from '../DumbComponent/DumbComponent'
const Someshit = 'lmao'


class Home extends React.Component {
  static displayName = 'Home'

  render () {
    return (
      <div className="Home">
        <section className="Home-splash-wrapper">
          <ul className="Home-center-header">
              <li>NegronRosen</li>
          </ul>
          <div className="Home-video">
              <video autoPlay muted loop>
                <source src="https://dl.dropboxusercontent.com/u/55385731/NegronRosen/JenieLift_logo_intro.mp4" type="video/mp4"/>
                  Your browser does not support the video tag.
              </video>
          </div>      
        </section>
      </div>
    )
  }
}

export default Home