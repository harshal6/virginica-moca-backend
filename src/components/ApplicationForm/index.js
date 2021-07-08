import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import DatePicker from 'react-date-picker'

import './styles.scss'

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class ApplicationForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      company: '',
      nonProfit: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      phone: '',
      fax: '',
      email: '',
      preferred: '',
      alternate: '',
      guests: '',
      location: '',
      type: '',
      referral: '',
      other: '',
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
    fetch('/?no-cache=1', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(this.handleSuccess)
      .catch(error => alert(error))
    event.preventDefault()
  }

  handleSuccess = () => {
    this.setState({
      name: '',
      company: '',
      nonProfit: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      phone: '',
      fax: '',
      email: '',
      preferred: '',
      alternate: '',
      guests: '',
      location: '',
      type: '',
      referral: '',
      other: '',
      submitted: true,
    })
  }

  render() {
    return (
      <div className="col-md-7 offset-md-5 application-form">
        <p>We look forward to making your event a success! To ensure a timely and accurate response, please complete this form in its entirety.</p>
        {this.state.submitted && (
          <div className="alert alert-success" role="alert">
            <strong>Thank you for applying!</strong> We will be in contact with you shortly!
          </div>
        )}
        <form
          name="application"
          onSubmit={this.handleSubmit}
          data-netlify="true"
          data-netlify-honeypot="bot"
          className="application-form"
        >
          <input type="hidden" name="form-name" value="application" />
          <p hidden>
            <label>
              Don’t fill this out:{' '}
              <input name="bot" onChange={this.handleInputChange} />
            </label>
          </p>

          <div className="form-group">
            <label htmlFor="name">Name: *</label>
            <input
              name="name"
              id="name"
              type="text"
              placeholder=""
              className="form-control"
              value={this.state.name}
              onChange={this.handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="company">Company: *</label>
            <input
              name="company"
              id="company"
              type="text"
              placeholder=""
              className="form-control"
              value={this.state.company}
              onChange={this.handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="nonprofit">Non-profit:</label>
            <select
              className="form-select"
              name="nonprofit"
              id="nonprofit"
              value={this.state.nonProfit}
              onChange={this.handleInputChange}
            >
              <option value=""></option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input
              name="address"
              id="address"
              type="text"
              placeholder=""
              className="form-control"
              value={this.state.address}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="city">City: *</label>
            <input
              name="city"
              id="city"
              type="text"
              placeholder=""
              className="form-control"
              value={this.state.city}
              onChange={this.handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="state">State: *</label>
            <select
              className="form-select"
              name="state"
              id="state"
              value={this.state.state}
              onChange={this.handleInputChange}
              required
            >
              <option value=""></option>
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

          <div className="form-group">
            <label htmlFor="zip">Zip Code: *</label>
            <input
              name="zip"
              id="zip"
              type="text"
              placeholder=""
              className="form-control"
              value={this.state.zip}
              onChange={this.handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone: *</label>
            <input
              name="phone"
              type="text"
              id="phone"
              placeholder=""
              className="form-control"
              autoComplete="off"
              value={this.state.phone}
              onChange={this.handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="fax">Fax: *</label>
            <input
              name="fax"
              type="text"
              id="fax"
              placeholder=""
              className="form-control"
              autoComplete="off"
              value={this.state.fax}
              onChange={this.handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email: *</label>
            <input
              name="email"
              id="email"
              type="email"
              placeholder=""
              className="form-control"
              value={this.state.email}
              onChange={this.handleInputChange}
              required
            />
          </div>

          {/* preferred event date */}
          <div className="form-group">
            <label htmlFor="Preferred">Preferred Event Date: *</label>
            <DatePicker
              name="preferred"
              id="preferred"
              calendarClassname="form-control"
              value={this.state.preferred}
              onChange={value => this.handleInputChange({target : { name: "preferred", value}})}
              required
            />
          </div>
          
          {/* alternate event date */}
          <div className="form-group">
            <label htmlFor="alternate">Alternate Event Date: *</label>
            <DatePicker
              name="alternate"
              id="alternate"
              calendarClassname="form-control"
              value={this.state.alternate}
              onChange={value => this.handleInputChange({target : { name: "alternate", value}})}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="company">Approximate number of guests:</label>
            <input
              name="guests"
              id="guests"
              type="text"
              placeholder=""
              className="form-control"
              value={this.state.guests}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">Rental Space (locations):</label>
            <select
              className="form-select"
              name="location"
              value={this.state.location}
              onChange={this.handleInputChange}
            >
              <option value=""></option>
              <option value="Atrium">Atrium</option>
              <option value="Rodriguez Pavilion">Rodriguez Pavilion</option>
              <option value="Price Auditorium">Price Auditorium</option>
            </select>
          </div>

          {/* event type drop down */}
          <div className="form-group">
            <label htmlFor="name">Event Type: *</label>
            <select
              className="form-select"
              name="type"
              value={this.state.type}
              onChange={this.handleInputChange}
              required
            >
              <option value=""></option>
              <option value="Wedding">Wedding</option>
              <option value="Corporate">Corporate</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* how did you hear about us drop down */}
          <div className="form-group">
            <label htmlFor="name">How did you hear about us? *</label>
            <select
              className="form-select"
              name="referral"
              value={this.state.referral}
              onChange={this.handleInputChange}
              required
            >
              <option value=""></option>
              <option value="Referral from a friend">Referral from a friend</option>
              <option value="Attended a private part at museum">Attended a private part at museum</option>
              <option value="Attended a museum function">Attended a museum function</option>
              <option value="I am a member">I am a member</option>
              <option value="I found you online">I found you online</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Other</label>
            <textarea
              name="other"
              id="other"
              type="text"
              placeholder=""
              className="form-control"
              value={this.state.other}
              onChange={this.handleInputChange}
              rows="7"
            />
          </div>

          <div>
            <input
              name="submit"
              className="btn btn-lg"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    )
  }
}

ApplicationForm.propTypes = {
  data: PropTypes.object,
}

export default ApplicationForm