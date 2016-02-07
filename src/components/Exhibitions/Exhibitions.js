import React from 'react'
import DumbComponent from '../DumbComponent/DumbComponent'


class Exhibitions extends React.Component {
  static displayName = 'Exhibitions'

  render () {
    return (
      <div className="Exhibitions">
        <DumbComponent text="the work page" />
      </div>
    )
  }
}

export default Exhibitions
