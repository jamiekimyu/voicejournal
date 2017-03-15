import React from 'react'
import { Link, browserHistory } from 'react-router';

export const Login = ({ login }) => (
  <div className="container">
    <form onSubmit = {
      (evt) => {
        evt.preventDefault()
        login(evt.target.username.value, evt.target.password.value)
        browserHistory.push('/')
      }}>
      <input name="username" placeholder="email" className="form-control" />
      <input name="password" type="password" placeholder="password" className="form-control" />
      <input type="submit" id="login" value="Login" className="btn btn-primary" />
      <a href="http://localhost:2000/api/auth/login/google" className="btn btn-default">Login With Google</a>
      <a href="http://localhost:2000/api/auth/login/facebook" className="btn btn-default">Login With Facebook</a>
    </form>
  </div>
)

import {login} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect (
  state => ({}),
  {login},
) (Login)

