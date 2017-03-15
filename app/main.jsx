'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import Login from './components/Login'
// import WhoAmI from './components/WhoAmI'
import Root from './components/Root'
import Home from './components/Home'
import Journal from './components/Journal/journal'
import Cuteness from './components/Cuteness'
import Dictaphone from './components/VoiceRecognition'
//import App from './components/Map/App'


render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Root}>
      <IndexRedirect to="/home" />
        <Route path="/home" component={Home} />
        <Route path="/journal" component={Journal} />
        <Route path="/login" component={Login} />
        <Route path="/cuteness" component={Cuteness} />
        <Route path="/voice" component={Dictaphone} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
