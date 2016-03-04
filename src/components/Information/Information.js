import React from 'react'

class Information extends React.Component {
  static displayName = 'Information'

  render () {
    return (
      <div className="Information">
        <ul className="Information-wrapper">    
            <li>    
                The In Real Life Institute (IRL Institute), formerly known as JenieLift, is an independent contemporary art institution that collects, preserves, interprets and represents works of art of the highest quality, representing artistic practices emerging in millennial culture.
            </li> 
            <li> 
                The programming at IRL consists of: physical exhibitions; virtual reality exhibitions; digital exhibitions; guest curatorial projects; lectures; independent publishing; educational programs; offsite projects; and music events.
            </li>
        </ul>
      </div>
    )
  }
}

export default Information
