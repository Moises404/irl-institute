import React from 'react'
import DumbComponent from '../DumbComponent/DumbComponent'
import {Link} from 'react-router'
import {MdMenu, MdPersonAdd} from 'react-icons'
import Logo from '../Logo/Logo'
import AppActions from '../../actions/AppActions'


class Navigation extends React.Component {
  static displayName = 'Navigation'

  toggleSidebar (context) {
    AppActions.toggleSidebar(context)
  }

  // <MdMenu />
  // <Link className="Navigation-link" to="work">Work</Link>
  render () {
    return (
      <nav className="Navigation">
        <div
          className="Navigation-menu"
          onClick={this.toggleSidebar.bind(this, 'menu')}>
          
        </div>
        
        <Link className="Navigation-link" to="home">Home</Link>
        <Link className="Navigation-link" to="information">Information</Link>
        <Link className="Navigation-link" to="contact">Contact</Link>
      </nav>
    )
  }
}

export default Navigation
