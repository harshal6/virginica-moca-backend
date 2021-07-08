import React from 'react';
import { Link } from 'gatsby'
import { navigate } from "gatsby"
import PropTypes from 'prop-types'

import './styles.scss'

class CreateAccount extends React.Component {
  static propTypes = {
    location: PropTypes.string,
    history: PropTypes.object
  }
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      address: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
      phone: '',
      zipcode: '',
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
    event.preventDefault();
    if (this.props.changeStep) {
      this.props.changeStep(2);
      this.props.step1Datafun(this.state)
    } else {
      navigate("/payment", {
        state: { memberShip: this.props.memberShip, signupDetail: this.state }
      })
    }
    // if(history) {
    //   history.push({pathname: "/payment", state: {memberShip: this.props.memberShip}})
    // }
    // submit code to go here
  }

  handleSuccess = () => {
    this.setState({
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      address: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
      phone: '',
      zipcode: '',
      submitted: true,
      // other handle success methods to go here
    })
  }

  render() {
    return (
      <form className="create-account my-5" onSubmit={(e) => this.handleSubmit(e)} style={{ width: "35%", margin: "0px auto" }}>
        <h6>Sign up using your email</h6>
        <div className="form-group pt-2">
          <label htmlFor="email">Enter your email address</label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-control"
            placeholder="email"
            required="required"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-group mb-5">
          <label htmlFor="password">Create password</label>
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
          <label htmlFor="firstName">First name</label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            placeholder="First Name"
            className="form-control"
            required="required"
            value={this.state.firstName}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last name</label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="form-control"
            required="required"
            value={this.state.lastName}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            id="address"
            type="text"
            name="address"
            placeholder="Address"
            className="form-control"
            required="required"
            value={this.state.address}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address2">Apt/suite/floor (optional)</label>
          <input
            id="address2"
            type="text"
            name="address2"
            placeholder="Apt/Suite/Floor"
            className="form-control"
            value={this.state.address2}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City/town</label>
          <input
            id="city"
            type="text"
            name="city"
            placeholder="city/town"
            className="form-control"
            required="required"
            value={this.state.city}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="row">
          <div className="form-group col-md-6">
            <label htmlFor="state">State</label>
            <select
              id="state"
              name="state"
              onChange={this.handleInputChange}
              className="form-select"
              required="required"
            >
              <option value="">State</option>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District Of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="zip">Zipcode</label>
            <input
              id="zip"
              type="number"
              name="zip"
              placeholder="zip"
              className="form-control"
              required="required"
              value={this.state.zip}
              onChange={this.handleInputChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="phone"
            className="form-control"
            required="required"
            value={this.state.phone}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="terms">
            <input
              id="terms"
              type="checkbox"
              name="terms"
              required="required"
              onChange={this.handleInputChange}
            />
            &nbsp; Terms and conditions
          </label>
        </div>
        <div className="form-group" >
          <input type="submit" className="btn" value="Sign Up" />
        </div>

        <hr />

        <h6>Already have an account? <Link to="">Log in</Link></h6>
      </form>
    )
  }
}

CreateAccount.propTypes = {
  data: PropTypes.object
}

export default CreateAccount