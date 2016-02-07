import React from 'react'
import {MdMenu, MdContactMail} from 'react-icons'
import DumbComponent from '../DumbComponent/DumbComponent'


class Contact extends React.Component {
  static displayName = 'Contact'

  render () {
    return (
        <div className="Contact">
          <ul className="Contact-wrapper">  
            <li>    
                <span>Email</span>
                <br></br>
                <span>negron.space@gmail.com</span>
                <br></br>
                <span>mbrosen@gmail.com</span>
            </li>

            <li>
                <span>Phone</span>
                <br></br>
                <span>(954) - 567 - 87957</span>
            </li>
          </ul>
        </div>
    )
  }
}

export default Contact
