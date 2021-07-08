import React, { useState } from "react"

import './styles.scss'

const Step3 = ({ changeStep, step3Datafun, data2 }) => {
  const [formData, setformData] = useState({
    member: "",
    childrean: "",
    exhibitions: []
  })

  const handleInputChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setformData({ ...formData, [name]: value })
  }

  const handleexhibitions = (e) => {
    const name = e.target.name
    const value = e.target.value
    const index = formData.exhibitions.findIndex(exhibition => exhibition == value)
    if (index >= 0) {
      formData.exhibitions.splice(index, 1);
    } else {
      formData.exhibitions.push(value)
    }
    setformData({ ...formData, exhibitions: [...formData] })
  }

  console.log(data2);

  const handleSubmit = (e) => {
    e.preventDefault();
    changeStep(1);
    step3Datafun(formData);
  }

  return (
    <div className="container reserve-tickets">
      <div className="row px-0 mt-5">
        <div className="col-md-7 offset-md-5 px-0">
          <form className="create-account my-5" onSubmit={(e) => handleSubmit(e)}>
            <h3>Step 3</h3>
            <hr />
            <h6>You're {data2.result.status}!</h6>
            <h6 className="headingMain">2 tickets for Thursday, March 4 at 10am</h6>
            <h6 className="heading3">Confirmation#{data2.result.id}</h6>
            <br />
            <h6>Just 3 quetions to help us learn about our visitors.</h6>
            <p>Have you been to Virginia MOCA in the past 5 years?</p>
            <div className="form-group">
              <label htmlFor="terms">
                <input
                  id="terms"
                  type="checkbox"
                  name="member"
                  value="Yes"
                  checked={formData.member === "Yes" ? true : false}
                  onChange={(e) => handleInputChange(e)}
                />
                &nbsp; Yes
              </label>
              <br />
              <label htmlFor="terms">
                <input
                  id="termsd"
                  type="checkbox"
                  name="member"
                  value="No"
                  checked={formData.member === "No" ? true : false}
                  onChange={(e) => handleInputChange(e)}
                />
                &nbsp; No
              </label>
            </div>
            <p>Are there any childrean (under 18) in your party?</p>
            <div className="form-group">
              <label htmlFor="terms">
                <input
                  id="termsw"
                  type="checkbox"
                  name="childrean"
                  value="Yes"
                  checked={formData.childrean === "Yes" ? true : false}
                  onChange={(e) => handleInputChange(e)}
                />
                &nbsp; Yes
              </label>
              <br />
              <label htmlFor="terms">
                <input
                  id="termse"
                  type="checkbox"
                  name="childrean"
                  value="No"
                  checked={formData.childrean === "No" ? true : false}
                  onChange={(e) => handleInputChange(e)}
                />
                &nbsp; No
              </label>
            </div>
            <p>How did you hear about the exhibitions?</p>
            <div className="form-group">
              <label htmlFor="terms">
                <input
                  id="terms"
                  type="checkbox"
                  name="exhibitions"
                  value="MOCA e-mail newlatter"
                  onChange={(e) => handleexhibitions(e)}
                />
                &nbsp; MOCA e-mail newlatter
              </label>
              <br />
              <label htmlFor="terms">
                <input
                  id="terms"
                  type="checkbox"
                  name="exhibitions"
                  value="Word of mouth"
                  onChange={(e) => handleexhibitions(e)}
                />
                &nbsp; Word of mouth
              </label>
              <br />
              <label htmlFor="terms">
                <input
                  id="terms"
                  type="checkbox"
                  name="exhibitions"
                  value="Dmove by"
                  onChange={(e) => handleexhibitions(e)}
                />
                &nbsp; Dmove by
              </label>
              <br />
              <label htmlFor="terms">
                <input
                  id="terms"
                  type="checkbox"
                  name="exhibitions"
                  value="Print ad"
                  onChange={(e) => handleexhibitions(e)}
                />
                &nbsp; Print ad
              </label>
              <br />
              <label htmlFor="terms">
                <input
                  id="terms"
                  type="checkbox"
                  name="exhibitions"
                  value="VII visitor guide"
                  onChange={(e) => handleexhibitions(e)}
                />
                &nbsp; VII visitor guide
              </label>
              <br />
              <label htmlFor="terms">
                <input
                  id="terms"
                  type="checkbox"
                  name="exhibitions"
                  value="Concearge/hotel"
                  onChange={(e) => handleexhibitions(e)}
                />
                &nbsp; Concearge/hotel
              </label>
              <br />
              <label htmlFor="terms">
                <input
                  id="terms"
                  type="checkbox"
                  name="exhibitions"
                  value="visitVAboatch 00m"
                  onChange={(e) => handleexhibitions(e)}
                />
                &nbsp; visitVAboatch 00m
              </label>
              <br />
              <label htmlFor="terms">
                <input
                  id="terms"
                  type="checkbox"
                  name="exhibitions"
                  value="Google/Online search"
                  onChange={(e) => handleexhibitions(e)}
                />
                &nbsp; Google/Online search
              </label>
              <br />
              <label htmlFor="terms">
                <input
                  id="terms"
                  type="checkbox"
                  name="exhibitions"
                  value="Facebook"
                  onChange={(e) => handleexhibitions(e)}
                />
                &nbsp; Facebook
              </label>
              <br />
              <label htmlFor="terms">
                <input
                  id="terms"
                  type="checkbox"
                  name="exhibitions"
                  value="Instagram"
                  onChange={(e) => handleexhibitions(e)}
                />
                &nbsp; Instagram
              </label>
              <br />
              <label htmlFor="terms">
                <input
                  id="terms"
                  type="checkbox"
                  name="exhibitions"
                  value="Online ad"
                  onChange={(e) => handleexhibitions(e)}
                />
                &nbsp; Online ad
              </label>
              <br />
              <label htmlFor="terms">
                <input
                  id="terms"
                  type="checkbox"
                  name="exhibitions"
                  value="Other"
                  onChange={(e) => handleexhibitions(e)}
                />
                &nbsp; Other
              </label>
            </div>
            <div className="form-group" >
              <input type="submit" className="btn" value="Close" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Step3