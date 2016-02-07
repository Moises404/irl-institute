import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './components/App/App'
import Home from './components/Home/Home'
import Information from './components/Information/Information'
import Contact from './components/Contact/Contact'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/home" component={Home}/>
    <Route path="/information" component={Information}/>
    <Route path="/contact" component={Contact}/>
  </Route>
)
