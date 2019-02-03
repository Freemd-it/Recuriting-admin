import React, { Component } from 'react';
import Sidebar from './views/domains/sidebar'
import MainTemplate from './views/contexts/templates/mainTemplate'
import Contents from './views/domains/contents'
import Login from './views/domains/login'
import * as axios from 'lib/api/context';

import empty from 'is-empty'

import './App.scss'

const getHealthCheck = async (ctx) => {
  const token = localStorage.getItem('token')
  const userSession = localStorage.getItem('user_session')

  if(empty(userSession) || empty(token)) {
    return false
  } else {
    const result = await axios.getHealthCheck(token)
    if (result.status === 200) {
      ctx.setState({
        onLogin: true,
      })
    }
  }
  ctx.setState({
    waitCheckFlag: true,
  }) 
}
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      onLogin: false,
      waitCheckFlag: false,
    }
    
  }

  componentDidMount() {
    getHealthCheck(this)
  }

  onhandleLogin = (e) => {
    const { onLogin } = this.state
    this.setState({
      onLogin: !onLogin,
    });
  }

  render() {
    const { onLogin, waitCheckFlag } = this.state
    if(waitCheckFlag) {
      if (onLogin) {
        return (
          <MainTemplate sidebar={<Sidebar/>} contents={<Contents/>} />
        ) 
      }
        return <Login onhandleLogin={this.onhandleLogin}/>
    } else {
      return null
    }
  }
}
export default App;
