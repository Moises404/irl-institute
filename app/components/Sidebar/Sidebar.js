import React from 'react'
import DumbComponent from '../DumbComponent/DumbComponent'
import {MdMenu, MdPersonAdd} from 'react-icons'
import Logo from '../Logo/Logo'
import AppActions from '../../actions/AppActions'
import cn from 'classnames'


class Sidebar extends React.Component {
  static displayName = 'Sidebar'

  static propTypes = {
    'className': React.PropTypes.string,
    'children': React.PropTypes.object
  }

  render () {
    const {className, children} = this.props
    const classes = cn('Sidebar', className)

    return (
      <div className={classes}>
        {children}
      </div>
    )
  }
}

export default Sidebar
