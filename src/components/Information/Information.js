import React from 'react'
import {MdMenu, MdContactMail} from 'react-icons'
import DumbComponent from '../DumbComponent/DumbComponent'


class Information extends React.Component {
  static displayName = 'Information'

  // <span className="Bio-image">
          //   <span></span>
          // </span>

  render () {
    return (
      <div className="Information">
        <ul className="Information-wrapper">    
            <li>    
                Jenielift is an alternative exhibition space that focuses on innovative procedures and thinking. Thegoal of the space is to create an environment for artists, writers, and musicians to make and exhibit work that will contribute to an international critical contemporary dialogue.
            </li> 
            <li> 
                The programming at Jenielift consists of: curated exhibitions; educational programs; off-site projects; guest curatorial projects; and presentations, talks, and concerts. An emphasis will also be placed on publishing scholarly catalogs to accompany exhibitions and events. These catalogues will ultimately expand the dialogue of the space beyond the local and regional and push it into the national and international.
            </li>
        </ul>
      </div>
    )
  }
}

export default Information
