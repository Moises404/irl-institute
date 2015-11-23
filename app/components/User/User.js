/*eslint-disable no-undef*/
import React from 'react'
import AppActions from '../../actions/AppActions'
import {FaFacebook, FaTwitter, FaGoogle} from 'react-icons'
import cn from 'classnames'


class User extends React.Component {
  static displayName = 'User'

  static propTypes = {
    'user': React.PropTypes.object
  }

  static defaultProps = {
    'user': {}
  }

  logOut (provider) {
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

        AppActions.setUser(null)
        AppActions.toggleSidebar('user')
      })
    }).fail( err => { console.log(err) })
  }

  render() {
    const {user} = this.props
    const userClass = cn('User-is', user.provider)

    let Icon
    switch (user.provider) {
      case 'google':
        Icon = <FaGoogle />
        break
      case 'facebook':
        Icon = <FaFacebook />
        break
      case 'twitter':
        Icon = <FaTwitter />
        break
    }

    return (
      <div className="User">
        <div className={userClass}>
          {Icon}
          {user.name}
        </div>
        <div className="User-sign-out">
          SIGN OUT
        </div>
      </div>
    )
  }
}

export default User
