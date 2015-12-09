import React from 'react'
import DumbComponent from '../DumbComponent/DumbComponent'


class Contact extends React.Component {
  static displayName = 'Contact'

  render () {
    return (
      <div className="Contact">
        <DumbComponent text="the contact page" />
      </div>
    )
  }
}

export default Contact
