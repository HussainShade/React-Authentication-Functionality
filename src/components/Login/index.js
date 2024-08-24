// Write your JS code here
import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

class Login extends Component {
  loginClicked = async () => {
    const {history} = this.props

    const url = 'https://apis.ccbp.in/login'
    const userDetails = {username: 'rahul', password: 'rahul@2021'}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    try {
      const response = await fetch(url, options)
      const data = await response.json()
      const jwtToken = data.jwt_token

      Cookies.set('jwt_token', jwtToken, {
        expires: 30,
        path: '/',
      })

      history.replace('/')
    } catch (error) {
      console.error('Login failed', error)
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div>
        <h1>Please Login</h1>
        <button type="button" onClick={this.loginClicked}>
          Login with Sample Creds
        </button>
      </div>
    )
  }
}

export default Login
