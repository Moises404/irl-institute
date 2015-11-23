import alt from '../alt'

class AppActions {
  constructor() {
    this.generateActions(
      'toggleSidebar',
      'setUser'
    )
  }
}

export default alt.createActions(AppActions)
