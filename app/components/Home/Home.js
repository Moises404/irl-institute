import React from 'react'
import DumbComponent from '../DumbComponent/DumbComponent'
const Someshit = 'lmao'


class Home extends React.Component {
  static displayName = 'Home'

  render () {
    return (
      <div className="Home">
        <DumbComponent text="lmaooo" />
      </div>
    )
  }
}

export default Home
