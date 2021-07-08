import axios from "axios"
import React, { useState } from "react"

import './style.scss'

const MakeAnDonation = ({ changeStep, step2Datafun, data }) => {
  const [formData, setformData] = useState({
    amount: "",
    frequency: "",
    cardNumber: "",
    Expiration: "",
    CVV: "",
    termsService: false
  })

  const handleInputChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setformData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    step2Datafun(formData);
    console.log(data, formData)
    var payLoadData = {
      amount: formData.amount,
      address: data.address,
      address2: data.address2,
      phone: data.phone,
      city: data.city,
      state: data.city,
      zipCode: data.zip,
      user: {
        email: data.email,
      }
    }
    axios.post('http://localhost:3000/api/donations/donate', payLoadData)
      .then(result => {
        console.log(result.data)
        if (result.status == 200) {
          alert(`Status : ${result.data.status}, Payment Id : ${result.data.paymentResponse.id}`)
        }
      }).catch(err => {
        alert(`Status : ${err.response.status}, Payment Id : ${err.response.data.message}`)

      });
  }

  return (
    <div className="container make-an-donation" style={{ width: "72%", marginLeft: "4%" }}>
      <div className="row px-0 mt-5">
        <div className="col-md-7 offset-md-5 px-0">
          <form className="create-account my-5" onSubmit={(e) => handleSubmit(e)}>
            <h3 >Make A Donation.</h3>
            <hr />
            <br />
            <p className="headingMain">Your contribution will benifits the larger community by supporting the museum's fine art and culturel programms. Set up a recurring monthly gift for ongoing support. Thank you!</p>
            <br />
            <h6 className="donationHead">Donation amount</h6>
            <div className="form-group">
              <input
                id="amount"
                type="number"
                name="amount"
                className="form-control"
                placeholder="Donation amount"
                required="required"
                value={formData.amount}
                onChange={handleInputChange}
              />
              <br />
            </div>
            <div className="form-group">
              <select
                id="frequency"
                name="frequency"
                className="form-select"
                value={formData.frequency}
                onChange={handleInputChange}
                required="required"
              >
                <option value="">Select One</option>
                <option value="One time">One time</option>
                <option value="Weekly">Weekly</option>
                <option value="Bi-weekly">Bi-weekly</option>
                <option value="Monthly">Monthly</option>
                <option value="Every 2 months">Every 2 months</option>
                <option value="Quarterly">Quarterly</option>
                <option value="Every 6 months">Every 6 months</option>
                <option value="Annually">Annually</option>
              </select>
            </div>
            <br />
            <h6 className="donationHead">Credit card number</h6>
            <div className="form-group">
              <input
                id="cardNumber"
                type="number"
                name="cardNumber"
                className="form-control"
                placeholder="Credit card number"
                required="required"
                value={formData.cardNumber}
                onChange={handleInputChange}
              />
            </div>
            <br />
            <div className="row">
              <div className="form-group col-md-6">
                <h6 className="donationHead">Expiration</h6>
                <div className="form-group">
                  <input
                    id="Expiration"
                    type="number"
                    name="Expiration"
                    className="form-control"
                    placeholder="Expiration"
                    required="required"
                    value={formData.Expiration}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="form-group col-md-6">
                <h6 className="donationHead">CVV</h6>
                <div className="form-group">
                  <input
                    id="CVV"
                    type="number"
                    name="CVV"
                    className="form-control"
                    placeholder="CVV"
                    required="required"
                    value={formData.CVV}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <br />
              <br />
              <br />
              <div className="form-group">
                <label htmlFor="terms">
                  <input
                    id="terms"
                    type="checkbox"
                    name="terms"
                    required="required"
                    onChange={() => setformData({ ...formData, "termsService": true })}
                  />
                  &nbsp; I want cover the 3% credit card processing fee as a donation to the museum. 5% for American Express.
                </label>
              </div>
            </div>
            <div className="form-group" >
              <input type="submit" className="btn" value="Confirm & Pay" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default MakeAnDonation