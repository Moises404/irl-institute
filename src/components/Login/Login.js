/*eslint-disable no-undef*/
import React from 'react'
import AppActions from '../../actions/AppActions'
import {FaFacebook, FaTwitter, FaGoogle, FaLongArrowRight} from 'react-icons'
import scriptLoader from '../../utils/scriptLoader'

class Login extends React.Component {
  constructor(props) {
    super(props)
  }

  static displayName = 'Login'

  attachOAuth (cb) {
    scriptLoader('http://api.art404.com/oauth/oauth.min.js', () => cb() )
  }

  login (provider) {
    window.OAuth.initialize('n2t3KZi8eLs8uiBZPDm0dM9RSPs', '9dpf2y9HoIfvwWvWpswm0AvtRp4')

    window.OAuth.popup(provider, {cache: true}).done( result => {
      result.me().done( user => {
        console.log(user)

        const userAuth = {
          avatar: user.avatar,
          name: user.name,
          id: user.id,
          url: user.url,
          token: result.acess_token,
          provider: result.provider
        }

        AppActions.setUser(userAuth)
        AppActions.toggleSidebar('user')
      })
    }).fail( err => { console.log(err) })
  }

  loginCheck (provider) {
    if (!window.OAuth) this.attachOAuth(() => this.login(provider) )
    else this.login(provider)
  }

  render() {
    return (
      <div className="Login">
        <div
          onClick={this.loginCheck.bind(this, 'facebook')}
          className="Login-option facebook">
          <FaFacebook /> Facebook
          <FaLongArrowRight className="ArrowRight" />
        </div>
        <div
          onClick={this.loginCheck.bind(this, 'twitter')}
          className="Login-option twitter">
          <FaTwitter /> Twitter
          <FaLongArrowRight className="ArrowRight" />
        </div>
        <div
          onClick={this.loginCheck.bind(this, 'google')}
          className="Login-option google">
          <FaGoogle /> Google
          <FaLongArrowRight className="ArrowRight" />
        </div>
      </div>
    )
  }
}

export default Login
