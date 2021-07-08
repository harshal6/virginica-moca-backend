import React from 'react';
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import './styles.scss'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      submitted: false,
    }
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    // submit code to go here
  }

  handleSuccess = () => {
    this.setState({
      email: '',
      password: '',
      submitted: true,
      // other handle success methods to go here
    })
  }

  render() {
    return (
      <form className="login" method="" action="">
        <h6>Log in with email used for your membership</h6>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email Address"
            className="form-control"
            required="required"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="password"
            className="form-control"
            required="required"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
        </div>
        
        <div className="form-group">
          <input type="submit" className="btn" value="Log In" />
        </div>

        <div className="border-5 border-dark"></div>

        <h6>Not yet a member? <Link to="">Join today</Link></h6>
      </form>
    )
  }
}

Login.propTypes = {
  data: PropTypes.object,
}

export default Login