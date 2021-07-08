import React, { useState } from 'react';
import Step1 from "./step1/index"
import Step2 from "./step2/index"
import Step3 from "./step3/index"

const ReserveTickets = ({ props }) => {
  const [stepNumber, setStepNumber] = useState(1);
  const [step1Data, setStep1Data] = useState();
  const [step2Data, setStep2Data] = useState();
  const [step3Data, setStep3Data] = useState();


  const changeStep = (step) => {
    setStepNumber(step)
  }

  const step1Datafun = (data) => {
    setStep1Data(data)
  }

  const step2Datafun = (data) => {
    setStep2Data(data)
  }

  const step3Datafun = (data) => {
    setStep3Data(data)
  }

  return (
    <>
      {stepNumber === 1 && <Step1 changeStep={changeStep} step1Datafun={step1Datafun}></Step1>}
      {stepNumber === 2 && <Step2 changeStep={changeStep} step2Datafun={step2Datafun} data={step1Data}></Step2>}
      {stepNumber === 3 && <Step3 changeStep={changeStep} step3Datafun={step3Datafun} data1={step1Data} data2={step2Data}></Step3>}
    </>
  )
}

export default ReserveTickets