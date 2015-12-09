import React from 'react'
import Helmet from "react-helmet"
import cfg from './config'
import Navigation from '../Navigation/Navigation'
import connectToStores from 'alt/utils/connectToStores'
import AppStore from '../../stores/AppStore'
import AppActions from '../../actions/AppActions'
import cn from 'classnames'
import Sidebar from '../Sidebar/Sidebar'
import SiteMap from '../SiteMap/SiteMap'
import Login from '../Login/Login'
import User from '../User/User'
import scriptLoader from '../../utils/scriptLoader'
import {isEmpty} from 'lodash'


class App extends React.Component {

  static displayName = 'App'

  static propTypes = {
    app: React.PropTypes.object,
    children: React.PropTypes.object
  }

  static getStores() {
    return [AppStore]
  }

  static getPropsFromStores() {
    return AppStore.getState()
  }

  constructor (props) {
    super(props)
  }

  componentDidMount () {
    if (typeof window.OAuth === 'undefined') this.attachOAuth(() => {
      console.log('OAuth initialized.')
    })
  }

  attachOAuth (cb) {
    scriptLoader('http://api.art404.com/oauth/oauth.min.js', () => cb() )
  }

  render() {
    console.log('APP PROPS >>> ', this.props)
    //children are the routes
    const {children, app} = this.props

    const classes = cn('Page', {
      '--side-open': app.sideBarOpen,
      '--menu-open': app.sideBarOpen && app.sideBarContext === 'menu',
      '--user-open': app.sideBarOpen && app.sideBarContext === 'user'
    })

    return (
      <div className={classes}>
        <Helmet {... cfg} />
        <Navigation />
        <Sidebar>
          <SiteMap links={[]} />
        </Sidebar>
        <Sidebar className="right">
          {isEmpty(app.user) ? <Login /> : <User user={app.user} />}
        </Sidebar>
        <div className="App-wrap">
          {children}
        </div>
        <div className="Blocker" onClick={AppActions.toggleSidebar.bind(this)} />
      </div>
    )
  }
}

export default connectToStores(App)
