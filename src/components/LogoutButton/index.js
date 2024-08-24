// Write your JS code here
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

const LogoutButton = props => {
  const logoutClicked = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <button type="button" onClick={logoutClicked}>
      Logout
    </button>
  )
}

export default withRouter(LogoutButton)
