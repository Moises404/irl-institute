import alt from '../alt'
import AppActions from '../actions/AppActions'


class AppStore {
  constructor() {
    this.bindActions(AppActions)
    this.state = {
      'app': {
        'sideBarOpen': false,
        'sideBarContext': ''
      }
    }
  }

  toggleSidebar (context) {
    let {app} = this.state
    app.sideBarOpen = !this.state.app.sideBarOpen
    app.sideBarContext = context

    this.setState({'app': app})
  }

  setUser (user) {
    let {app} = this.state
    app.user = user

    this.setState({'app': app})
  }
}

export default alt.createStore(AppStore, 'AppStore')
