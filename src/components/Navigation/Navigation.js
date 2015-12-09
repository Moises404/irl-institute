import React from 'react'
import DumbComponent from '../DumbComponent/DumbComponent'
import {MdMenu, MdPersonAdd} from 'react-icons'
import Logo from '../Logo/Logo'
import AppActions from '../../actions/AppActions'


class Navigation extends React.Component {
  static displayName = 'Navigation'

  toggleSidebar (context) {
    AppActions.toggleSidebar(context)
  }

  render () {
    return (
      <nav className="Navigation">
        <div
          className="Navigation-menu"
          onClick={this.toggleSidebar.bind(this, 'menu')}>
          <MdMenu />
        </div>
        <div className="Navigation-logo">
          <Logo />
        </div>
        <div
          className="Navigation-login"
          onClick={this.toggleSidebar.bind(this, 'user')}>
          <MdPersonAdd />
        </div>
      </nav>
    )
  }
}

export default Navigation
