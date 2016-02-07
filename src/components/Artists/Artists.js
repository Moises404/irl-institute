import React from 'react'
import {MdMenu, MdContactMail} from 'react-icons'
import DumbComponent from '../DumbComponent/DumbComponent'


class Artists extends React.Component {
  static displayName = 'Artists'

  render () {
    return (
      <div className="Artists">
        <ul className="Artists-wrapper">
        	<span className="Artists-image">
            <span></span>
          </span>
        	<li>	
        		<span>Email</span>
        		<br></br>
        		<span>negron.space@gmail.com</span>
        		<br></br>
        		<span>mbrosen@gmail.com</span>
        	</li>

        	<span className="Artists-image">
            <span></span>
          </span>
        	<li>
        		<span>Phone</span>
        		<br></br>
        		<span>(954) 567 - 87957</span>
        	</li>
        </ul>
      </div>
    )
  }
}

export default Artists
