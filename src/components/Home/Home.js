import React from 'react'

class Home extends React.Component {
  static displayName = 'Home'

  render () {
    return (
      <div className="Home">
        <section className="Home-splash-wrapper">
          <div className="Home-video">
              <video autoPlay muted loop>
                  <source src="https://dl.dropboxusercontent.com/u/55385731/IRL/IRL_logoVideo_whiteWall.mp4" type="video/mp4"/>
                  <source src="images/IRL_logo_whiteWall.ogg" type="video/ogg"/>
                  <source src="images/IRL_logo_whiteWall.webm" type="video/webm"/>
              </video>
          </div>
          <div className="Home-gif">
              <img src="images/IRL_logo_whiteWall.gif"/>
          </div>  
        </section>
      </div>
    )
  }
}

export default Home