import React from 'react'
import {Link} from 'react-router'

export default () => (
  <div key="SiteMap" className="SiteMap">
    <ul>
      <li>
        <Link to="home">Home</Link>
      </li>
      <li>
        <Link to="information">Information</Link>
      </li>
      <li>
        <Link to="contact">Contact</Link>
      </li>
    </ul>
  </div>
)
