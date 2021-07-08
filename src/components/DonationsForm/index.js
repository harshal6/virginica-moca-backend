import React, { useState } from 'react';
import CreateAccount from '../CreateAccount'
import MakeAnDonation from "./MakeAnDonations/index"
import Thankyou from "./Thankyou/index"
import Login from '../Login'

import './styles.scss'

const DonationsForm = ({ props }) => {
  const [stepNumber, setStepNumber] = useState(1);
  const [step1Data, setStep1Data] = useState();
  const [step2Data, setStep2Data] = useState();

  const changeStep = (step) => {
    setStepNumber(step)
  }

  const step1Datafun = (data) => {
    setStep1Data(data)
  }

  const step2Datafun = (data) => {
    setStep2Data(data)
  }

  console.log("step1Data -- ", step1Data);
  console.log("step2Data -- ", step2Data);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-7 offset-md-5" style={{ width: "100%", marginLeft: "0%" }}>
          {stepNumber === 1 && <CreateAccount changeStep={changeStep} step1Datafun={step1Datafun} />}
          {stepNumber === 2 && <MakeAnDonation changeStep={changeStep} step2Datafun={step2Datafun} data={step1Data} />}
          {stepNumber === 3 && <Thankyou changeStep={changeStep} />}
          {/* <Login /> */}
        </div>
      </div>
    </div>
  )
}

export default DonationsForm