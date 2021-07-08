import React from 'react';
import { Link } from 'gatsby'
import { navigate } from "gatsby"
import PropTypes from 'prop-types'

import './styles.scss'
import axios from 'axios'

class Step2 extends React.Component {
  static propTypes = {
    location: PropTypes.string,
    history: PropTypes.object,
  }
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      address: '',
      state: '',
      zip: '',
      member: "",
      visitingTerms: "",
      serviceTerms: "",
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
    var data = {
      user: {
        email: this.state.email,
        name: this.state.firstName + ' ' + this.state.lastName,
      },
      eventId: 9695,
      addressLine1: this.state.address,
      addressLine2: this.state.address,
      city: this.state.address,
      stateProvinceCode: this.state.state,
      zipCode: this.state.zip
    }
    axios.post('http://localhost:3000/api/events/register', data)
      .then(result => {
        this.props.changeStep(3);
        this.props.step2Datafun(result.data);
      }).catch(err => {
        console.log(err.response);
      });
    // if(history) {
    //   history.push({pathname: "/payment", state: {memberShip: this.props.memberShip}})
    // }
    // submit code to go here
  }
  handleSuccess = () => {
    this.setState({
      email: '',
      firstName: '',
      lastName: '',
      address: '',
      state: '',
      zip: '',
      zipcode: '',
      submitted: true,
      // other handle success methods to go here
    })
  }

  render() {
    return (
      <div className="container reserve-tickets">
        <div className="row px-0 mt-5">
          <div className="col-md-7 offset-md-5 px-0">
            <form className="create-account my-5" onSubmit={(e) => this.handleSubmit(e)}>
              <h3>Step 2</h3>
              <hr />
              <h6>Order confirmation will be sent to your email.</h6>
              <h6 className="heading2">2 tickets for Thursday, March 4 at 10am</h6>
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
              <div className="form-group pt-2">
                <label htmlFor="email">Email</label>
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
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="state">State</label>
                  <select
                    id="state"
                    name="state"
                    className="form-select"
                    required="required"
                    onChange={this.handleInputChange}
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

              <p>Are you a member of Virginia MOCA?</p>
              <div className="form-group">
                <label htmlFor="terms">
                  <input
                    id="terms"
                    type="checkbox"
                    name="member"
                    value="Yes"
                    checked={this.state.member === "Yes" ? true : false}
                    onChange={this.handleInputChange}
                  />
                  &nbsp; Yes
                </label>
                &nbsp; &nbsp; &nbsp;
                <label htmlFor="terms">
                  <input
                    id="terms"
                    type="checkbox"
                    name="member"
                    value="No"
                    checked={this.state.member === "No" ? true : false}
                    onChange={this.handleInputChange}
                  />
                  &nbsp; No
                </label>
                &nbsp; &nbsp; &nbsp;
                <label htmlFor="terms">
                  <input
                    id="terms"
                    type="checkbox"
                    name="member"
                    value="Member"
                    checked={this.state.member === "Member" ? true : false}
                    onChange={this.handleInputChange}
                  />
                  &nbsp; I was a member in the past
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="terms">
                  <input
                    id="terms"
                    type="checkbox"
                    name="visitingTerms"
                    value="visitingTerms"
                    checked={this.state.visitingTerms === "visitingTerms" ? true : false}
                    required="required"
                    onChange={this.handleInputChange}
                  />
                  &nbsp; I agree to the Virginia moca, CDC and Commonwealth of Virginia gudelines for visiting a museum.
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="terms">
                  <input
                    id="terms"
                    type="checkbox"
                    name="serviceTerms"
                    value="serviceTerms"
                    required="required"
                    checked={this.state.serviceTerms === "serviceTerms" ? true : false}
                    onChange={this.handleInputChange}
                  />
                  &nbsp; II accept the Terms Of Service and read the Privacy Policy. I agree that Eventbrite may share my information with the event arganzer.
                </label>
              </div>
              <div className="form-group" >
                <input type="submit" className="btn" value="Complete" />
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

Step2.propTypes = {
  data: PropTypes.object
}

export default Step2